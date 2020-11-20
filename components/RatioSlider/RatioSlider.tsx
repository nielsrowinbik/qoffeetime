import { FC, useCallback, useRef, useState } from "react";

import { RatioSliderContainer } from "./RatioSliderContainer";

import { useBoundingClientRect } from "../../hooks/use-boundingclientrect";

import { Recipe } from "../../utils/types";

type RatioSliderProps = {
    borderRadius?: number;
    height?: number;
    minFill?: number;
    onChange: (newValue: number) => void;
    recipe: Recipe;
    value: number;
    width?: number;
};

export const RatioSlider: FC<RatioSliderProps> = ({
    borderRadius = 48,
    height = 250,
    minFill = 0.5,
    onChange,
    recipe: { maxWater, minWater },
    width = 175,
    ...props
}) => {
    const svgRef = useRef();
    const svgRect = useBoundingClientRect(svgRef);

    const [isDragging, setDragging] = useState(false);
    const [value, setValue] = useState(props.value);

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
            const value = minWater + normalized * (maxWater - minWater);

            return Math.round(value);
        },
        [maxWater, minWater]
    );

    // Helper function to convert a value to a percentage:
    const valueToPercentage = useCallback((value: number) => value / maxWater, [
        maxWater,
    ]);

    const onMouseDown = useCallback(
        (e) => {
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
            // Update the state to reflect the fact that we're no longer dragging:
            setDragging(false);

            // Call onChange in the props:
            onChange(value);
        },
        [value]
    );

    const filledHeight = valueToPercentage(value) * height;
    const coffeeHeight = (2 / 5) * filledHeight;
    const waterHeight = filledHeight - coffeeHeight - borderRadius;

    return (
        <RatioSliderContainer>
            <svg
                height={height}
                width={width}
                viewBox={`0 0 ${width} ${height}`}
                ref={svgRef}
                // style={{ borderRadius }}
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
                            M ${borderRadius},${height - filledHeight}
                            h ${width - 2 * borderRadius}
                            q ${borderRadius},0 ${borderRadius},${borderRadius}
                            v ${waterHeight}
                            h -${width}
                            v -${waterHeight}
                            q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                            z
                        `}
                        fill="white"
                    />
                    <path
                        d={`
                            M 0,${height}
                            v -${coffeeHeight}
                            h ${width}
                            v ${coffeeHeight}
                            h -${width}
                            z
                        `}
                        fill="brown"
                    />
                </g>
            </svg>
        </RatioSliderContainer>
    );
};
