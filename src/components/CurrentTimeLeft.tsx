import { FC } from "react";
import styled from "styled-components";

import { Timestamp } from "./Timestamp";

type CurrentTimeLeftProps = {
    stepDescription: string;
    timeRemaining: number;
};

const H1 = styled.h1`
    margin: 0;
    margin-bottom: 0.8rem;
`;

const H4 = styled.h4`
    margin: 0.8rem 0;
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
