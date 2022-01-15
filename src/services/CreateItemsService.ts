import { getRepository } from "typeorm";
import { Item } from "../entities/Item";

type ItemRequest = {
    name: string,
    ammount: number,
    unity: string
}

export class CreateItemsService {
    async execute({ name, ammount, unity }: ItemRequest): Promise<Item | Error> {
        const repo = getRepository(Item)

        if(await repo.findOne({name})){
            return new Error("Category already exists!")
        }

        const item = repo.create({
            name,
            ammount,
            unity
        })

        await repo.save(item)

        return item
    }
}