import { FC } from "react";

import { parseMillisecondsIntoTimeStamp } from "../utils/parser";

export const Timestamp: FC = ({ children, ...props }) => (
    <time {...props}>{parseMillisecondsIntoTimeStamp(children as number)}</time>
);
