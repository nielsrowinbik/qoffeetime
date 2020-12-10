import styled from "styled-components";

export const RecipeStepsListItemContainer = styled.li`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    position: relative;

    & + li {
        margin-top: 16px;
    }
`;
