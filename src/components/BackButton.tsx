import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import styled from "styled-components";

const BackIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            fill="currentColor"
        />
    </svg>
);

const Button = styled.button`
    background: none;
    border: none;
    border-radius: 100%;
    color: white;
    height: 36px;
    margin: 0;
    padding: 0;
    width: 36px;
`;

export const BackButton: FC = ({ children }) => {
    const router = useRouter();
    const onClick = useCallback(() => router.back(), []);

    return <Button onClick={onClick}>{children || <BackIcon />}</Button>;
};
