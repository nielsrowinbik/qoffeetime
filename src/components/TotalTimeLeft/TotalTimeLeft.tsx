import { TotalTimeLeftContainer as Container } from "./TotalTimeLeftContainer";
import { TotalTimeLeftLabel as Label } from "./TotalTimeLeftLabel";
import { TotalTimeLeftTimestamp as Timestamp } from "./TotalTimeLeftTimestamp";

export const TotalTimeLeft = ({ children }) => (
    <Container>
        <Timestamp>{children}</Timestamp>
        <Label>total left</Label>
    </Container>
);
