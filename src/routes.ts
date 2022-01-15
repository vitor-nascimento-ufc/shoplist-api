import { Router } from "express"
import { CreateItemContoller } from "./controllers/CreateItemController"
import { DeleteItemController } from "./controllers/DeleteItemController"
import { GetAllItemsController } from "./controllers/GetAllItemsController"
import { UpdateItemController } from "./controllers/UpdateItemController"

const routes = Router()

routes.post("/items", new CreateItemContoller().handle)
routes.get("/items", new GetAllItemsController().handle)
routes.put("/items/:id", new UpdateItemController().handle)
routes.delete("/items/:id", new DeleteItemController().handle)

export { routes }