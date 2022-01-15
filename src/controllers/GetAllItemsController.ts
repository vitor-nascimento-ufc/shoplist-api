import { Request, Response } from "express";
import { GetAllItemsService } from "../services/GetAllItemsService";


export class GetAllItemsController {
    async handle(request: Request, response: Response){
        const service = new GetAllItemsService()

        const categories = await service.execute()

        return response.json(categories)
    }
}