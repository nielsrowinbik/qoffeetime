import { FC } from "react";
import styled from "styled-components";

import { BrewsListItem as ListItem } from "./BrewsListItem";

import type { Brew, Recipies } from "../../utils/types";

export type BrewsListProps = {
    brews: Brew[];
    recipies: Recipies;
};

const UnstyledBrewsList: FC<BrewsListProps> = ({
    brews,
    recipies,
    ...props
}) => (
    <ul {...props}>
        {brews.map(({ coffee, created, volume, ...brew }) => {
            const recipe = recipies[brew.recipe].name;

            return (
                <ListItem
                    coffee={coffee}
                    created={created}
                    key={brew.id}
                    recipe={recipe}
                    volume={volume}
                />
            );
        })}
    </ul>
);

export const BrewsList = styled(UnstyledBrewsList)`
    padding: 0;
    margin: 0;
`;
