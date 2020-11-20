import { FC } from "react";

import { RecipeStep } from "../../utils/types";

import { RecipeStepsListContainer as Container } from "./RecipeStepsListContainer";
import { RecipeStepsListItem as ListItem } from "./RecipeStepsListItem";

type StepsListProps = {
    currentStepIndex?: number;
    steps: RecipeStep[];
};

export const RecipeStepsList: FC<StepsListProps> = ({
    currentStepIndex = -1,
    steps,
}) => (
    <Container>
        {steps.map((step, i) => (
            <ListItem
                index={i}
                isActive={currentStepIndex === i}
                key={i}
                step={step}
            />
        ))}
    </Container>
);
