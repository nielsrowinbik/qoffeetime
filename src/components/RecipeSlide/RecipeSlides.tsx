import { FC, useCallback } from "react";

import { RecipeSlidesContainer as Container } from "./RecipeSlidesContainer";
import { RecipeSlidesWrapper as Wrapper } from "./RecipeSlidesWrapper";
import { RecipeSlide } from "./RecipeSlide";
import {
    RecipeSlideIndicatorContainer as IndicatorContainer,
    RecipeSlideIndicator as Indicator,
} from "./RecipeSlideIndicator";

import type { Recipies } from "../../utils/types";

export type RecipeSlidesProps = {
    onChange: (newSlug: string) => void;
    recipies: Recipies;
    value: string;
};

export const RecipeSlides: FC<RecipeSlidesProps> = ({
    onChange,
    recipies,
    value,
}) => {
    const slugs = Object.keys(recipies);
    const index = slugs.findIndex((slug: string) => slug === value);

    const handleIndexChange = useCallback(
        (newIndex: number) => onChange && onChange(slugs[newIndex]),
        [recipies]
    );

    return (
        <Wrapper>
            <Container
                enableMouseEvents
                index={index}
                onChangeIndex={handleIndexChange}
            >
                {slugs.map((slug) => (
                    <RecipeSlide
                        key={slug}
                        recipe={recipies[slug]}
                        slug={slug}
                    />
                ))}
            </Container>
            <IndicatorContainer>
                {slugs.map((slug, i) => (
                    <Indicator
                        active={i === index}
                        key={slug}
                        onClick={() => onChange && onChange(slug)}
                    />
                ))}
            </IndicatorContainer>
        </Wrapper>
    );
};
