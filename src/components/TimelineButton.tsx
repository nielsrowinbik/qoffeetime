import Link from "next/link";
import styled from "styled-components";

import { Button } from "./Button";
import { TimelineIcon } from "./TimelineIcon";

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 40px;
`;

export const TimelineButton = () => (
    <Container>
        <Link href="/timeline">
            <Button icon={<TimelineIcon height={20} width={20} />}>
                Timeline
            </Button>
        </Link>
    </Container>
);
