import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

export const RecipeSlidesContainer = styled(SwipeableViews)`
    padding: 0 16px;

    &,
    & > div {
        height: 100%;
    }
`;
