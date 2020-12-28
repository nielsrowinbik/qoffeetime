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
    background-color: #ff1744;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;

    h1,
    p {
        overflow: hidden;
    }

    h1 {
        margin: 1rem 0;
        line-height: 4.25rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: 400;
        height: calc(8 * 1.25em);
        margin: 0;
        max-width: 75%;
        line-height: 1.25em;
    }
`;
