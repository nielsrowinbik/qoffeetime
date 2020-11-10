import { FC } from "react";

import { parseMillisecondsIntoTimeStamp } from "../utils/parser";

export const TotalTime: FC = ({ children }) => (
    <div>
        <time>{parseMillisecondsIntoTimeStamp(children as number)}</time>
        <span>total left</span>
        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                text-align: center;
            }

            time {
                font-family: Roboto;
                font-size: 1.8rem;
                font-weight: 600;
            }
        `}</style>
    </div>
);
