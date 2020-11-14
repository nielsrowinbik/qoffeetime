import styled from "styled-components";

import { Button } from "./Button";

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;

    ${Button} {
        flex: 100%;
    }

    ${Button}:first-child:not(:only-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: 0;
    }

    ${Button}:last-child:not(:only-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-left: 0;
    }

    ${Button}:not(:first-child):not(:last-child) {
        border-radius: 0;
    }
`;
