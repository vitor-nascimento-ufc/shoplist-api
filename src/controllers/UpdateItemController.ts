import { Request, Response } from "express";
import { UpdateItemService } from "../services/UpdateItemService";


export class UpdateItemController {
    async handle(request: Request, response: Response){
        const { id } = request.params
        const {name, ammount, unity} = request.body

        const service = new UpdateItemService()

        const result = await service.execute({ id, name, ammount, unity })

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}