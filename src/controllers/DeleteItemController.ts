import { Request, Response } from "express";
import { DeleteItemsService } from "../services/DeleteItemService";

export class DeleteItemController {
    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new DeleteItemsService()

        const result = await service.execute(id)

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json()
    }
}