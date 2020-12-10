import styled from "styled-components";

import { Timestamp } from "../Timestamp";

const H3 = styled.h3`
    font-weight: 700;
    font-size: 2.3rem;
    margin: 0;
    line-height: 1.8rem;
`;

export const TotalTimeLeftTimestamp = ({ children }) => (
    <H3>
        <Timestamp>{children}</Timestamp>
    </H3>
);
