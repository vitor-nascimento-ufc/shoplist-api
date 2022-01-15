import { getRepository } from "typeorm";
import { Item } from "../entities/Item";

type ItemUpdateRequest = {
    id: string
    name: string
    ammount: number
    unity: string
}

export class UpdateItemService {
    async execute({id, name, ammount, unity}: ItemUpdateRequest) {
        const repo = getRepository(Item)

        const item = await repo.findOne(id)

        if(!item) {
            return new Error("Item does not exists!")
        }

        
        item.name = name
        item.ammount = ammount
        item.unity = unity
        
        await repo.save(item)
        return item
    }
}