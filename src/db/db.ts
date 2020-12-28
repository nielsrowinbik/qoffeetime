import Dexie from "dexie";

import type { Brew, UserBrew } from "../utils/types";

const LIST_SIZE = 100;

export class BrewsDB extends Dexie {
    brews: Dexie.Table<Brew, number>;

    constructor() {
        super("BrewsDB");

        this.version(1).stores({
            brews: "++id, coffee, created, recipe, volume",
        });
        this.brews = this.table("brews");
    }

    async get(id: number) {
        return this.brews.get({ id });
    }

    async create(userBrew: UserBrew) {
        const brew = {
            ...userBrew,
            created: new Date(),
        };

        const id = await this.brews.add(brew);
        return (await this.brews.get(id)) as Brew;
    }

    async list(start: number = 0) {
        return this.brews
            .orderBy("created")
            .reverse()
            .offset(start)
            .limit(LIST_SIZE)
            .toArray();
    }

    async remove(brewId: number) {
        return await this.brews.delete(brewId);
    }
}

export const db = new BrewsDB();
