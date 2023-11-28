import * as Z from "zod"
import { schemaEntity } from "./A"


export const schemaPerson = schemaEntity.and(Z.object({
    age: Z.number(),
    sex: Z.literal("F").or(Z.literal("M")).or(Z.literal("U"))
}))

export type Person = Z.infer<typeof schemaPerson>