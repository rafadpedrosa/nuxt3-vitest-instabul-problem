import {sleep} from "@antfu/utils";

export default defineEventHandler(async () => {
    await sleep(3000)

    return 'Hello, world!'
})