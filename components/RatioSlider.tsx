import { HTMLProps, FC } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

import { Recipe } from "../utils/types";

const SliderWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const StyledSlider = styled(ReactSlider)`
    height: 240px;
    position: relative;
    width: 180px;
`;

const StyledThumb = styled.div`
    height: 50px;
    width: 100%;
    background-color: transparent;
    cursor: grab;
    outline: none;
`;

const Thumb = (props) => <StyledThumb {...props} />;

// FIXME: explicit but unnecessary any
const StyledTrack = styled.div<any>`
    background: ${({ index }) =>
        index === 0
            ? "linear-gradient(0deg, brown 0%, brown 40%, white 40%, white 100%)"
            : "transparent"};
    border-radius: 56px;
    bottom: 0;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
`;

const Track = (props, { index }) => <StyledTrack {...props} index={index} />;

const ValueLabel = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    left: 0;
    position: absolute;
    transform: translate3d(calc(50% - 12px), 0, 0);
    width: 76px;

    span:first-child {
        opacity: 0.8;
    }

    span:last-child {
        font-size: 1.3rem;
        font-weight: 700;
    }
`;

type RatioSliderProps = {
    recipe: Recipe;
    value: number;
};

export const RatioSlider: FC<
    RatioSliderProps & HTMLProps<HTMLInputElement>
> = ({ recipe, value, ...props }) => {
    const cappedValue = Math.max(value, recipe.minWater);
    const requiredCoffee = Math.round(
        (cappedValue / 1000) * recipe.defaultRatio
    );

    return (
        <SliderWrapper>
            {/* @ts-ignore */}
            <StyledSlider
                renderThumb={Thumb}
                renderTrack={Track}
                orientation="vertical"
                invert
                min={0}
                max={recipe.maxWater}
                value={cappedValue}
                {...props}
            />
            <ValueLabel>
                <span>Water</span>
                <span>{cappedValue}ml</span>
            </ValueLabel>
            <ValueLabel style={{ bottom: 0 }}>
                <span>Coffee</span>
                <span>{requiredCoffee}g</span>
            </ValueLabel>
        </SliderWrapper>
    );
};
