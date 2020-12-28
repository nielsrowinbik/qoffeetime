import "fake-indexeddb/auto";
import { db } from "./db";

const fakeBrew = {
    coffee: 30,
    recipe: "v60",
    volume: 500,
};

describe("`BrewsDB`", () => {
    beforeAll(async () => {
        await db.brews.clear();
    });

    it("is empty by default", () => {
        expect(db.list()).resolves.toHaveLength(0);
    });

    it("can store a new brew", async () => {
        const brew = await db.create(fakeBrew);
        const list = await db.list();

        expect(brew).toMatchObject(fakeBrew);
        expect(list).toHaveLength(1);
    });

    it("adds `created` to new brew", async () => {
        const { id } = await db.create(fakeBrew);
        const brew = await db.get(id);

        expect(brew).toHaveProperty("created");
    });

    it("can remove an existing brew", async () => {
        const { id } = await db.create(fakeBrew);
        await db.remove(id);

        expect(db.get(id)).resolves.not.toBeDefined();
    });
});
