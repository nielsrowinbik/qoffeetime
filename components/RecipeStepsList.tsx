import { FC } from "react";
import styled from "styled-components";

import { RecipeStep } from "../utils/types";
import { Timestamp } from "./Timestamp";

const StepsOrderedList = styled.ol`
    margin: 0;
    overflow: auto;
    padding-inline-start: 24px;
`;

const StepsListItem = styled.li<{ active?: boolean }>`
    &::marker {
        color: rgba(0, 0, 0, 0.2);
        font-family: Roboto;
        font-weight: 700;
    }
`;

type StepsListProps = {
    currentStepIndex?: number;
    steps: RecipeStep[];
};

export const RecipeStepsList: FC<StepsListProps> = ({
    currentStepIndex = -1,
    steps,
}) => (
    <StepsOrderedList>
        {steps.map((step, i) => (
            <StepsListItem active={currentStepIndex === i} key={i}>
                <div>
                    <Timestamp>{step.duration * 1000}</Timestamp>
                    <p>{step.description}</p>
                </div>
            </StepsListItem>
        ))}
        <style jsx>{`
            li time {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 36px;
                border-radius: 100%;
                border: 1px solid #fff;
                font-size: 0.8rem;
                font-weight: 700;
                flex: 0 0 36px;
            }

            li p {
                font-weight: 500;
                opacity: 0.8;
                margin: 0;
                padding: 0 0 0 12px;
            }

            li.active p {
                font-weight: 700;
                opacity: 1;
            }

            li .flex {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 48px;
            }
        `}</style>
    </StepsOrderedList>
);
