import { useRouter } from "next/router";
import { FC, useCallback } from "react";

export const BackButton: FC = ({ children }) => {
    const router = useRouter();
    const onClick = useCallback(() => router.back(), []);

    return <button onClick={onClick}>{children || "back"}</button>;
};
