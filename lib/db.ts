import Dexie from 'dexie';

import type { Brew } from '../lib/types';

const LIST_SIZE = 100;

export class BrewsDB extends Dexie {
    brews: Dexie.Table<Brew, number>;

    constructor() {
        super('BrewsDB');

        this.version(2).stores({
            brews: '++id, coffee, comment, created, recipe, volume',
        });
        this.brews = this.table('brews');
    }

    async get(id: number) {
        return this.brews.get({ id });
    }

    async create(brew: Brew) {
        const created = Date.now();
        const id = await this.brews.add({ ...brew, created });
        return await this.brews.get(id);
    }

    async list(start: number = 0) {
        return this.brews
            .orderBy('created')
            .reverse()
            .offset(start)
            .limit(LIST_SIZE)
            .toArray();
    }

    async update(id: number, data: Partial<Brew>) {
        await this.brews.update(id, data);
        return await this.brews.get(id);
    }

    async remove(id: number) {
        return await this.brews.delete(id);
    }
}

export const db = new BrewsDB();
