import { FC } from "react";
import styled from "styled-components";

import { Timestamp } from "./Timestamp";

type CurrentTimeLeftProps = {
    stepDescription: string;
    timeRemaining: number;
};

const H1 = styled.h1`
    line-height: 4.6rem;
    margin: 0;
    margin: 1.2rem 0;
`;

const H4 = styled.h4`
    margin: 1.2rem 0;
    margin-right: 20%;
`;

export const CurrentTimeLeft: FC<CurrentTimeLeftProps> = ({
    stepDescription,
    timeRemaining,
}) => (
    <>
        <H1>
            <Timestamp>{timeRemaining}</Timestamp>
        </H1>
        <H4>{stepDescription}</H4>
    </>
);
