import { Button } from "../components/Button";
import { BackButton } from "../components/BackButton";
import { FixedFooter } from "../components/FixedFooter";
import { Main } from "../components/Layout";
import { Nav, NavHeading } from "../components/Nav";

import { getStaticRecipies } from "../utils/recipies";

const TimelineView = ({ recipies }) => {
    return (
        <>
            <Nav>
                <BackButton />
                <NavHeading>Coffee Timeline</NavHeading>
            </Nav>
            <Main></Main>
            <FixedFooter>
                <Button>Add coffee consumption</Button>
            </FixedFooter>
        </>
    );
};

export { getStaticRecipies as getStaticProps };

export default TimelineView;
