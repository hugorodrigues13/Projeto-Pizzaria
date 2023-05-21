import { Request, Response } from "express";
import { CreateCategoryServie } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response){
        const {name} = req.body;

        const CreateCategoryService = new CreateCategoryServie();
        
        const category = await CreateCategoryService.execute({
            name
        });

        return res.json(category);
    }
}

export {CreateCategoryController}