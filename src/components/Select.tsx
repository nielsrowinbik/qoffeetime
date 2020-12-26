import { FC, HTMLProps, useCallback } from "react";
import styled from "styled-components";

type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = HTMLProps<HTMLSelectElement> & {
    options?: SelectOption[];
    onChange?: (newValue: string) => void;
};

const UnstyledSelect: FC<SelectProps> = ({ options, onChange, ...props }) => {
    const handleChange = useCallback(
        ({ target: { value } }) => {
            onChange && onChange(value);
        },
        [onChange]
    );

    return (
        <select {...props} onChange={handleChange}>
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export const Select = styled(UnstyledSelect)`
    background: transparent;
    border: none;
    color: white;
    height: 35px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 6px;
    width: 100%;

    option {
        background: white;
        color: black;
        display: flex;
        min-height: 20px;
        padding: 0px 2px 1px;
        white-space: pre;
    }
`;
