import { HTMLProps, FC, useCallback, useRef, useState } from "react";
// import ReactSlider from "react-slider";
import styled from "styled-components";

import { useBoundingClientRect } from "../hooks/use-boundingclientrect";

import { Recipe } from "../utils/types";

// const SliderWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     position: relative;
// `;

// const StyledSlider = styled(ReactSlider)`
//     height: 240px;
//     position: relative;
//     width: 180px;
// `;

// const StyledThumb = styled.div`
//     height: 50px;
//     width: 100%;
//     background-color: transparent;
//     cursor: grab;
//     outline: none;
// `;

// const Thumb = (props) => <StyledThumb {...props} />;

// // FIXME: explicit but unnecessary any
// const StyledTrack = styled.div<any>`
//     background: ${({ index }) =>
//         index === 0
//             ? "linear-gradient(0deg, brown 0%, brown 40%, white 40%, white 100%)"
//             : "transparent"};
//     border-radius: 56px;
//     bottom: 0;
//     left: 0;
//     position: relative;
//     top: 0;
//     width: 100%;
// `;

// const Track = (props, { index }) => <StyledTrack {...props} index={index} />;

// const ValueLabel = styled.div`
//     align-items: flex-end;
//     display: flex;
//     flex-direction: column;
//     left: 0;
//     position: absolute;
//     transform: translate3d(calc(50% - 12px), 0, 0);
//     width: 76px;

//     span:first-child {
//         font-size: 0.7rem;
//     }

//     span:last-child {
//         font-size: 1.3rem;
//         font-weight: 700;
//     }
// `;

type RatioSliderProps = {
    onChange: (newValue: number) => void;
    recipe: Recipe;
    value: number;
};

// export const RatioSlider: FC<
//     RatioSliderProps & HTMLProps<HTMLInputElement>
// > = ({ recipe, value, ...props }) => {
//     const cappedValue = Math.max(value, recipe.minWater);
//     const requiredCoffee = Math.round(
//         (cappedValue / 1000) * recipe.defaultRatio
//     );

//     return (
//         <SliderWrapper>
//             {/* @ts-ignore */}
//             <StyledSlider
//                 renderThumb={Thumb}
//                 renderTrack={Track}
//                 orientation="vertical"
//                 invert
//                 min={0}
//                 max={recipe.maxWater}
//                 step={10}
//                 value={cappedValue}
//                 {...props}
//             />
//             <ValueLabel>
//                 <span>Water</span>
//                 <span>{cappedValue}ml</span>
//             </ValueLabel>
//             <ValueLabel style={{ bottom: 0 }}>
//                 <span>Coffee</span>
//                 <span>{requiredCoffee}g</span>
//             </ValueLabel>
//         </SliderWrapper>
//     );
// };

export const RatioSlider: FC<RatioSliderProps> = ({
    recipe: { maxWater, minWater },
    onChange,
    ...props
}) => {
    const borderRadius = 48; // TODO: Allow to be set through a prop
    const height = 225; // TODO: Allow to be set through a prop
    const iconSize = 24;
    const minFill = 0.5; // TODO: Allow to be set through a prop
    const width = 175; // TODO: Allow to be set through a prop

    const svgRef = useRef();
    const svgRect = useBoundingClientRect(svgRef);

    const [isDragging, setDragging] = useState(false);
    const [value, setValue] = useState(props.value);

    const positionToPercentage = useCallback(
        (pos: number) =>
            Math.max(
                (height - Math.max(pos - svgRect?.top, 0)) / height,
                minFill
            ),
        [height, minFill, svgRect]
    );

    // Helper function to normalize the
    const normalize = useCallback((val: number) => (val - minFill) * 2, []);

    const percentageTovalue = useCallback(
        (percentage: number) => {
            const normalized = normalize(percentage);
            const value = minWater + normalized * (maxWater - minWater);

            return Math.round(value);
        },
        [maxWater, minWater]
    );

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
    const coffeeHeight = (1 / 3) * filledHeight;
    const waterHeight = filledHeight - coffeeHeight - borderRadius;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
    );
};
