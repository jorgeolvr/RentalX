import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const createCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);

export { createCategoryController };
