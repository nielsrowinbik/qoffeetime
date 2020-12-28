import styled from "styled-components";

export const RecipeSlideIndicatorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

type IndicatorProps = {
    active?: boolean;
};

export const RecipeSlideIndicator = styled.button<IndicatorProps>`
    border: 1px solid currentColor;
    padding: 0;
    background-color: ${({ active }) => (active ? "white" : "transparent")};
    color: inherit;
    width: 8px;
    height: 8px;
    margin: 0;
    border-radius: 100%;

    & + & {
        margin-left: 20px;
    }
`;
