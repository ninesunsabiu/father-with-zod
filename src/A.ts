import * as Z from "zod"

export const schemaEntity = Z.lazy(() => {
    return Z.object({
        id: Z.number(),
        name: Z.string(),
    })
})

export type Entity = Z.infer<typeof schemaEntity>

