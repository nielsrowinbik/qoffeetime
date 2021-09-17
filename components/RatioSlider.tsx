import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useBoundingclientrectRef } from 'rooks';

import { round } from '../lib/helpers';

type RatioSliderProps = {
    borderRadius?: number;
    height?: number;
    maxOutput: number;
    minOutput: number;
    maxRatio?: number;
    minRatio?: number;
    ratio: number;
    width?: number;
    output: number;
};

type DraggingState = '' | 'left' | 'right';

const COFFEE_STEP = 1;
const OUTPUT_STEP = 10;

// TODO: Add a `minFill` prop or setting, setting the minimum height for the white area.
// This setting should also be taken into account when dragging. This way the user can drag from
// the top of any area and precisely move it into position.

const RatioSlider = ({
    borderRadius = 64,
    height = 320,
    maxOutput,
    minOutput,
    maxRatio = 100,
    minRatio = 30,
    width = 320,
    ...props
}: RatioSliderProps) => {
    const router = useRouter();
    const [svgRef, svgRect] = useBoundingclientrectRef();

    // Helper function to compute the percentage the user has dragged up:
    const _positionToPercentage = useCallback(
        (posY: number) => {
            const minValue = height * (1 / 8);
            const maxValue = height * (7 / 8);
            const posYWithinShape = Math.min(
                Math.max(posY - svgRect.top, minValue),
                maxValue
            );

            return (
                100 -
                ((posYWithinShape - minValue) * 100) / (maxValue - minValue)
            );
        },
        [height, svgRect]
    );

    // Helper function to convert a percentage to an output value:
    const _percentageToOutput = useCallback(
        (percentage: number) => {
            const value =
                (percentage / 100) * (maxOutput - minOutput) + minOutput;
            return Math.ceil(value / OUTPUT_STEP) * OUTPUT_STEP;
        },
        [maxOutput, minOutput]
    );

    // Helper function to convert a percentage to a ratio value:
    const _percentageToRatio = useCallback(
        (percentage: number) => {
            const value = (percentage / 100) * (maxRatio - minRatio) + minRatio;
            return Math.ceil(value / COFFEE_STEP) * COFFEE_STEP;
        },
        [maxRatio, minRatio]
    );

    // Keep internal value representations:
    const [ratio, setRatio] = useState(props.ratio);
    const [output, setOutput] = useState(props.output);

    // Update internal state if props change:
    useEffect(() => {
        setRatio(props.ratio);
        setOutput(props.output);
    }, [props.ratio, props.output]);

    // Keep whether we're dragging in state:
    const [dragging, setDragging] = useState<DraggingState>('');

    // Handle dragging start:
    const onMouseDown = useCallback(
        (e) => {
            e.stopPropagation();

            const posX = (e.touches ? e.touches[0] : e).clientX;
            const posY = (e.touches ? e.touches[0] : e).clientY;

            // Update state to reflect dragging state (prefer dragging right):
            const side = posX >= width / 2 ? 'right' : 'left';
            setDragging(side);

            // Update internal values:
            _onChange(posY, side);
        },
        [svgRect]
    );

    // Handle dragging:
    const onMouseMove = useCallback(
        (e) => {
            e.stopPropagation();

            // Don't do anything if we're not dragging:
            if (dragging === '') return;

            const posY = (e.touches ? e.touches[0] : e).clientY;

            // Update internal values:
            _onChange(posY, dragging);
        },
        [dragging, svgRect]
    );

    // Handle dragging end:
    const onMouseUp = useCallback(
        (e) => {
            e.stopPropagation();

            // Update the state to reflect that we're no longer dragging:
            setDragging('');

            // Update external values:
            onChange();
        },
        [svgRect]
    );

    // Callback to update internal output value:
    const _onChange = useCallback(
        (posY: number, side: 'left' | 'right') => {
            const percentage = _positionToPercentage(posY);

            if (side === 'right') {
                // We're dragging right, update the output:
                return setOutput(_percentageToOutput(percentage));
            } else {
                // We're dragging left, update the ratio:
                return setRatio(_percentageToRatio(percentage));
            }
        },
        [svgRect]
    );

    // Callback to update external values:
    const onChange = useCallback(() => {
        router.replace(
            {
                pathname: window.location.pathname,
                query: {
                    output,
                    ratio,
                },
            },
            undefined,
            { shallow: true }
        );
    }, [ratio, output]);

    const filledHeight = (output / maxOutput) * (height * (6 / 8));
    const coffeeHeight = (ratio / 1000) * 7 * filledHeight;
    const waterHeight = filledHeight - coffeeHeight;

    return (
        <svg
            height={height}
            width="100%"
            viewBox={`0 0 ${width} ${height}`}
            ref={svgRef as any}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            onMouseMove={onMouseMove}
            onTouchMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchEnd={onMouseUp}
        >
            <defs>
                <clipPath id="clipPath">
                    <path
                        d={`
                            M ${width / 4 + borderRadius},${height * (1 / 8)}
                            h ${width / 2 - 2 * borderRadius}
                            q ${borderRadius},0 ${borderRadius},${borderRadius}
                            v ${height * (6 / 8) - 2 * borderRadius}
                            q 0,${borderRadius} -${borderRadius},${borderRadius}
                            h -${width / 2 - 2 * borderRadius}
                            q ${-borderRadius},0 -${borderRadius},-${borderRadius}
                            v -${height * (6 / 8) - 2 * borderRadius}
                            q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                            z
                        `}
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#clipPath)" name="shape">
                <path
                    d={`
                        M 0,${height * (1 / 8)}
                        h ${width}
                        v ${height * (6 / 8)}
                        h -${width}
                        v -${height * (6 / 8)}
                        z
                    `}
                    fill="#E80036"
                    name="background"
                />
                <g>
                    <path
                        d={`
                            M 0,${height * (7 / 8) - coffeeHeight}
                            h ${width}
                            v -${waterHeight}
                            h -${width}
                            v ${waterHeight}
                            z
                        `}
                        fill="white"
                        name="output"
                    />
                </g>
                <g>
                    <path
                        d={`
                            M 0,${height * (7 / 8)}
                            h ${width}
                            v -${coffeeHeight}
                            h -${width}
                            v ${coffeeHeight}
                            z
                        `}
                        fill="#8a0020"
                        name="coffee"
                    />
                </g>
            </g>
            <g name="output-label">
                <text
                    className="text-sm capitalize"
                    dx="10px"
                    fill="currentColor"
                    textAnchor="start"
                    x={width * (3 / 4)}
                    y={height * (7 / 8) - coffeeHeight - waterHeight / 2}
                >
                    Output
                </text>
                <text
                    className="font-bold text-lg"
                    dx="10px"
                    dy="1.4rem"
                    fill="currentColor"
                    textAnchor="start"
                    x={width * (3 / 4)}
                    y={height * (7 / 8) - coffeeHeight - waterHeight / 2}
                >
                    {output}&nbsp;ml
                </text>
            </g>
            <g name="coffee-label">
                <text
                    className="text-sm capitalize"
                    dx="-10px"
                    fill="currentColor"
                    textAnchor="end"
                    x={width / 4}
                    y={height * (7 / 8) - coffeeHeight / 2}
                >
                    Coffee
                </text>
                <text
                    className="font-bold text-lg"
                    dx="-10px"
                    dy="1.4rem"
                    fill="currentColor"
                    textAnchor="end"
                    x={width / 4}
                    y={height * (7 / 8) - coffeeHeight / 2}
                >
                    {round((ratio / 1000) * output)}&nbsp;g
                </text>
            </g>
        </svg>
    );
};

export default RatioSlider;
