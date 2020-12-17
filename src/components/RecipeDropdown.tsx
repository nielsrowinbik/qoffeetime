import { FC, HTMLProps, useCallback } from "react";
import range from "lodash.range";

import type { Recipe, Recipies } from "../utils/types";

export type RecipeDropdownProps = {
    recipies: Recipies;
};

export const RecipeDropdown: FC<
    RecipeDropdownProps & HTMLProps<HTMLSelectElement>
> = ({ onChange, recipies, ...props }) => {
    const options = Object.keys(recipies).map((slug) => ({
        label: recipies[slug].name,
        value: slug,
    }));

    const handleChange = useCallback(({ target: { value } }) => {
        onChange && onChange(value);
    }, []);

    return (
        <select {...props} onChange={handleChange}>
            <option disabled></option>
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export type VolumeDropdownProps = {
    recipe: Recipe;
};

export const VolumeDropdown: FC<
    VolumeDropdownProps & HTMLProps<HTMLSelectElement>
> = ({ onChange, recipe, ...props }) => {
    const handleChange = useCallback(({ target: { value } }) => {
        onChange && onChange(value);
    }, []);

    const stepSize = 10;
    const options = range(
        recipe?.minWater,
        recipe?.maxWater + stepSize,
        stepSize
    ).map((step) => ({
        label: `${step}ml`,
        value: step,
    }));

    return (
        <select {...props} onChange={handleChange}>
            <option disabled></option>
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};
