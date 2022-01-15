import { Request, Response } from "express";
import { CreateItemsService } from "../services/CreateItemsService";


export class CreateItemContoller {
    async handle(request: Request, response: Response) {
        const {name, ammount, unity} = request.body

        const service = new CreateItemsService()

        const result = await service.execute({name, ammount, unity})

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}