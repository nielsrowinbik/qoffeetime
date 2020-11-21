import styled from "styled-components";

type RecipeStepsListItemDescriptionProps = {
    isActive: boolean;
};

export const RecipeStepsListItemDescription = styled.p<
    RecipeStepsListItemDescriptionProps
>`
    font-weight: ${({ isActive }) => (isActive ? 600 : "inherit")};
    margin: 0;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
    line-height: 1.1rem;
`;
