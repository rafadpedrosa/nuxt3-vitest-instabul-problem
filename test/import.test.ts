import {describe, expect} from "vitest";

describe("import vue components", () => {
    test("useState should work", async () => {
        const cmp = await import("../components/RandomNumber.vue")

        expect(cmp).toBeDefined()
    })

    test("useAsyncData should work", async () => {
        const getAsync = await import("../components/GetAsync.vue")

        expect(getAsync).toBeDefined()
    })
})