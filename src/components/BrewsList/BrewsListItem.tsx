import { formatRelative } from "date-fns";
import { FC } from "react";
import styled from "styled-components";

import { CoffeeBeanIcon } from "../CoffeeBeanIcon";
import { WaterDropIcon } from "../WaterDropIcon";

type BrewsListItemProps = {
    coffee: number;
    created?: Date;
    recipe: string;
    volume: number;
};

const UnstyledBrewsListItem: FC<BrewsListItemProps> = ({
    coffee,
    created,
    recipe,
    volume,
    ...props
}) => (
    <li {...props}>
        <div>
            <span>
                {formatRelative(created, new Date(), { weekStartsOn: 1 })}
            </span>
            <h5>{recipe}</h5>
        </div>
        <div>
            <CoffeeBeanIcon height={20} width={20} />
            <h5>{coffee}g</h5>
        </div>
        <div>
            <WaterDropIcon height={20} width={20} />
            <h5>{volume}ml</h5>
        </div>
    </li>
);

export const BrewsListItem = styled(UnstyledBrewsListItem)`
    align-items: center;
    display: grid;
    grid-column-gap: 24px;
    grid-template-columns: 1fr min-content min-content;

    h5 {
        margin: 0;
        font-size: 1.1rem;
    }

    span:first-letter {
        text-transform: capitalize;
    }

    & > div {
        display: flex;
        flex-direction: column;

        &:first-child {
            flex: 100%;

            & > span {
                font-size: 0.8rem;
            }
        }

        &:not(:first-child) {
            align-items: center;
        }
    }

    & + li {
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        margin-top: 12px;
        padding-top: 12px;
    }
`;
