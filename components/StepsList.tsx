import { FC } from "react";

import { parseMillisecondsIntoTimeStamp } from "../utils/parser";
import { RecipeStep } from "../utils/types";

type StepsListProps = {
    currentStepIndex?: number;
    steps: RecipeStep[];
};

export const StepsList: FC<StepsListProps> = ({
    currentStepIndex = -1,
    steps,
}) => (
    <ol>
        {steps.map((step, i) => (
            <li className={currentStepIndex === i ? "active" : ""} key={i}>
                <div className="flex">
                    <time>
                        {parseMillisecondsIntoTimeStamp(step.duration * 1000)}
                    </time>
                    <p>{step.description}</p>
                </div>
            </li>
        ))}
        <style jsx>{`
            ol {
                margin: 0;
                overflow: auto;
                padding-inline-start: 24px;
            }

            li::marker {
                font-family: Roboto;
                font-weight: 700;
                color: rgba(0, 0, 0, 0.2);
            }

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
    </ol>
);
