import { getRepository } from "typeorm";
import { Item } from "../entities/Item";


export class DeleteItemsService {
    async execute(id: string){
        const repo = getRepository(Item)

        if(!await repo.findOne(id)) {
            return new Error("Category does not exists!")
        }

        await repo.delete(id)
    }
}