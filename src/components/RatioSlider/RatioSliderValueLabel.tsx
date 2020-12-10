import { FC } from "react";
import styled from "styled-components";

type UnstyledRatioSliderValueLabelProps = {
    bottomOffset?: number | string;
    topOffset?: number | string;
    type: string;
    unit: string;
    value: number;
};

const UnstyledRatioSliderValueLabel: FC<UnstyledRatioSliderValueLabelProps> = ({
    bottomOffset,
    type,
    unit,
    value,
    ...props
}) => (
    <label {...props}>
        <span>{type}</span>
        <span>
            {Math.round(value)}
            {unit}
        </span>
    </label>
);

export const RatioSliderValueLabel = styled(UnstyledRatioSliderValueLabel)`
    align-items: flex-end;
    transform: translate3d(
        0,
        calc(${({ bottomOffset }) => bottomOffset}px - 50%),
        0
    );
    display: flex;
    flex-direction: column;
    margin-right: 12px;
    position: absolute;
    right: 0;
    top: ${({ topOffset }) => topOffset};

    span:last-child {
        font-size: 1.2rem;
        font-weight: 700;
    }
`;
