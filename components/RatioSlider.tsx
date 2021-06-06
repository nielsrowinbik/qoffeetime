import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useBoundingclientrectRef } from 'rooks';

import { round } from '../lib/helpers';

type ValueLabelProps = {
    bottomOffset: number;
    type: 'coffee' | 'water';
    value: number;
};

const ValueLabel = ({ bottomOffset, type, value }: ValueLabelProps) => (
    <label
        className="flex flex-col -mr-4 items-end absolute right-0"
        style={{
            transform: `translate3d(0, calc(${bottomOffset}px - 55%), 0)`,
        }}
    >
        <span className="text-sm capitalize">{type}</span>
        <span className="font-bold text-lg">
            {round(value)}
            {type === 'coffee' ? 'g' : 'ml'}
        </span>
    </label>
);

type RatioSliderProps = {
    borderRadius?: number;
    height?: number;
    min: number;
    max: number;
    minFill?: number;
    onChange: (newValue: number) => void;
    ratio: number;
    width?: number;
    value: number;
};

const RatioSlider = ({
    borderRadius = 64,
    height = 225,
    min,
    max,
    minFill = 0.5,
    onChange,
    ratio,
    width = 164,
    ...props
}: RatioSliderProps) => {
    const [svgRef, svgRect] = useBoundingclientrectRef();

    // Keep whether we're dragging in state:
    const [isDragging, setDragging] = useState(false);

    // Keep an iternal value representation:
    const [value, setValue] = useState(props.value);

    // Sync the internal value representation with what we receive through props:
    useEffect(() => setValue(props.value), [props.value]);

    // Helper function to compute the vertical position to a percentage:
    const positionToPercentage = useCallback(
        (pos: number) =>
            Math.max(
                (height - Math.max(pos - svgRect?.top, 0)) / height,
                minFill
            ),
        [height, minFill, svgRect]
    );

    // Helper function to normalize the percentage:
    const normalize = useCallback((val: number) => (val - minFill) * 2, []);

    // Helper function to convert a percentage to a value:
    const percentageTovalue = useCallback(
        (percentage: number) => {
            const normalized = normalize(percentage);
            const value = min + normalized * (max - min);

            return round(value);
        },
        [max, min]
    );

    // Helper function to convert a value to a percentage:
    const valueToPercentage = useCallback(
        (value: number) => value / max,
        [max]
    );

    const onMouseDown = useCallback(
        (e) => {
            e.stopPropagation();

            // Update the state to reflect the fact that we're dragging:
            setDragging(true);

            // Immediately update the internal value, so we begin dragging from
            // the correct position:
            const position = (e.touches ? e.touches[0] : e).clientY;
            const percentage = positionToPercentage(position);
            const newValue = percentageTovalue(percentage);
            const cappedValue = Math.ceil(newValue / 10) * 10;
            setValue(cappedValue);
        },
        [svgRect]
    );

    const onMouseMove = useCallback(
        (e) => {
            e.stopPropagation();

            // Don't do anything if we're not dragging:
            if (!isDragging) return;

            // Update the internal value to display dragging movement:
            const position = (e.touches ? e.touches[0] : e).clientY;
            const percentage = positionToPercentage(position);
            const newValue = percentageTovalue(percentage);
            const cappedValue = Math.ceil(newValue / 10) * 10;
            setValue(cappedValue);
        },
        [isDragging, svgRect]
    );

    const onMouseUp = useCallback(
        (e) => {
            e.stopPropagation();

            // Update the state to reflect the fact that we're no longer dragging:
            setDragging(false);

            // Call onChange in the props:
            onChange(value);
        },
        [value]
    );

    const filledHeight = valueToPercentage(value) * height;
    const coffeeHeight = (2 / 5) * filledHeight;
    const coffeeLabelOffset = height - coffeeHeight / 2;
    const waterHeight = filledHeight - coffeeHeight;
    const waterLabelOffset = height - coffeeHeight - waterHeight / 2;

    return (
        <div className="grid grid-cols-5">
            <div className="relative">
                <ValueLabel
                    bottomOffset={waterLabelOffset}
                    type="water"
                    value={value}
                />
                <ValueLabel
                    bottomOffset={coffeeLabelOffset}
                    type="coffee"
                    value={(ratio / 1000) * value}
                />
            </div>
            <svg
                className="col-start-2 col-span-3"
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
                            M ${borderRadius},0
                            h ${width - 2 * borderRadius}
                            q ${borderRadius},0 ${borderRadius},${borderRadius}
                            v ${height - 2 * borderRadius}
                            q 0,${borderRadius} -${borderRadius},${borderRadius}
                            h -${width - 2 * borderRadius}
                            q ${-borderRadius},0 -${borderRadius},-${borderRadius}
                            v -${height - 2 * borderRadius}
                            q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                            z
                        `}
                        />
                    </clipPath>
                </defs>
                <g clipPath="url(#clipPath)">
                    <path
                        d={`
                            M 0,0
                            h ${width}
                            v ${height}
                            h -${width}
                            v -${height}
                            z
                        `}
                        fill="#E80036"
                    />
                    <g>
                        <path
                            d={`
                            M 0,${height - filledHeight}
                            h ${width}
                            v ${waterHeight}
                            h -${width}
                            v -${waterHeight}
                            z
                        `}
                            fill="white"
                        />
                        <svg
                            height={24}
                            viewBox="0 0 405.047 405.047"
                            width={24}
                            x={width / 2 - 12}
                            y={waterLabelOffset - 12}
                        >
                            <path
                                d="M283.897,92.846c-36.582-49.345-73.688-89.267-74.061-89.664C207.944,1.153,205.296,0,202.523,0   c-2.774,0-5.423,1.152-7.314,3.182c-0.371,0.397-37.478,40.319-74.06,89.664c-49.971,67.403-75.308,119.726-75.308,155.513   c0,86.396,70.287,156.688,156.682,156.688c86.396,0,156.683-70.29,156.683-156.688C359.206,212.572,333.868,160.25,283.897,92.846z    M218.171,354.342c-8.213,1.941-16.68,2.926-25.162,2.926c-60.294,0-109.347-49.055-109.347-109.35   c0-8.312,2.559-23.373,14.75-47.914c1.225-2.467,4.046-3.691,6.687-2.908c2.639,0.785,4.33,3.357,4.007,6.091   c-0.28,2.361-0.421,4.584-0.421,6.607c0,64.629,45.966,120.77,109.298,133.484c2.607,0.525,4.5,2.795,4.545,5.455   C222.575,351.396,220.761,353.729,218.171,354.342z"
                                fill="#c5c5c5"
                            />
                        </svg>
                    </g>
                    <g>
                        <path
                            d={`
                            M 0,${height}
                            v -${coffeeHeight}
                            h ${width}
                            v ${coffeeHeight}
                            h -${width}
                            z
                        `}
                            fill="#8a0020"
                        />
                        <svg
                            height={24}
                            viewBox="0 0 511.664 511.664"
                            width={24}
                            x={width / 2 - 12}
                            y={coffeeLabelOffset - 12}
                        >
                            <path
                                d="M309.426,419.204c0-81.04-31.684-120.468-65.224-162.212c-32.436-40.368-65.968-82.092-65.968-164.304    c0-29.456,4.164-54.984,12.828-78.848c-78.608,34.504-135.28,129.908-135.28,241.992c0,141.072,89.744,255.832,200.048,255.832    c13.532,0,26.744-1.748,39.524-5.032c-0.5-2.22-0.388-4.608,0.484-6.896C304.982,475.656,309.426,449.316,309.426,419.204z"
                                fill="#550014"
                            />
                            <path
                                d="M255.83,0c-11.832,0-23.408,1.4-34.68,3.928c-0.124,0.328-0.208,0.664-0.364,0.988    c-12.656,26.08-18.552,53.968-18.552,87.768c0,73.764,28.112,108.752,60.664,149.256c33.064,41.148,70.528,87.772,70.528,177.256    c0,28.572-3.724,54.196-11.304,77.964c77.816-35.064,133.76-129.976,133.76-241.336C455.886,114.764,366.142,0,255.83,0z"
                                fill="#550014"
                            />
                        </svg>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default RatioSlider;
