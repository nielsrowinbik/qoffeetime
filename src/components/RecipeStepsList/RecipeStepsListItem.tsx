import { FC } from "react";

import { RecipeStep } from "../../utils/types";

import { RecipeStepsListItemContainer as Container } from "./RecipeStepsListItemContainer";
import { RecipeStepsListItemIndex as Index } from "./RecipeStepsListItemIndex";
import { RecipeStepsListItemTimestamp as Timestamp } from "./RecipeStepsListItemTimestamp";
import { RecipeStepsListItemDescription as Description } from "./RecipeStepsListItemDescription";

type StepsListItemProps = {
    index: number;
    isActive: boolean;
    step: RecipeStep;
};

export const RecipeStepsListItem: FC<StepsListItemProps> = ({
    index,
    isActive,
    step: { description, duration },
}) => (
    <Container>
        <Index>{index + 1}</Index>
        <Timestamp>{duration * 1000}</Timestamp>
        <Description isActive={isActive}>{description}</Description>
    </Container>
);
