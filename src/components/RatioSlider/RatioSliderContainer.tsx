import styled from "styled-components";

export const RatioSliderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    svg {
        overscroll-behavior-y: contain;
    }
`;
