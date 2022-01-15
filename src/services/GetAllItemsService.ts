import { getRepository } from "typeorm";
import { Item } from "../entities/Item";


export class GetAllItemsService {
    async execute(){
        const repo = getRepository(Item)

        const categories = await repo.find()

        return categories
    }
}