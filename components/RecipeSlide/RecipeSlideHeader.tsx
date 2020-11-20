import { FC } from "react";
import styled from "styled-components";

type RecipeSlideHeaderProps = {
    description?: string;
    image?: string;
    title?: string;
};

const UnstyledRecipeSlideHeader: FC<RecipeSlideHeaderProps> = ({
    description,
    title,
    ...props
}) => (
    <header {...props}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
    </header>
);

export const RecipeSlideHeader = styled(UnstyledRecipeSlideHeader)`
    background-blend-mode: darken;
    background-color: #ff0841;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: flex-end;
    margin: 24px;
    padding: 12px;

    h1,
    p {
        max-width: 75%;
        overflow: hidden;
        line-height: 1.25em;
    }

    h1 {
        margin: 1rem 0;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        height: calc(8 * 1.25em);
        margin: 0;
    }
`;
