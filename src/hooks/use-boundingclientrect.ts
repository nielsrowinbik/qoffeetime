import { useState, useEffect, MutableRefObject, useCallback } from "react";

function getBoundingClientRect(
    element: HTMLElement
): ClientRect | DOMRect | null {
    return element.getBoundingClientRect();
}

export const useBoundingClientRect = (
    ref: MutableRefObject<HTMLElement | null>
) => {
    const [value, setValue] = useState<ClientRect | DOMRect | null>(null);

    const update = useCallback(() => {
        setValue(ref.current ? getBoundingClientRect(ref.current) : null);
    }, [ref.current]);

    useEffect(() => {
        update();
    }, []);

    return value;
};
