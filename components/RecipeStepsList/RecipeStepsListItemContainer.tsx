import styled from "styled-components";

export const RecipeStepsListItemContainer = styled.li`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;

    & + li {
        margin-top: 16px;
    }
`;
