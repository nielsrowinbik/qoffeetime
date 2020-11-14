import { FC } from "react";

import { parseMillisecondsIntoTimeStamp } from "../utils/parser";

export const Timestamp: FC = ({ children, ...props }) => (
    <time>{parseMillisecondsIntoTimeStamp(children as number)}</time>
);
