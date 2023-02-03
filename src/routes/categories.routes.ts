import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const listAll = categoriesRepository.list();

  return response.status(201).send({ categories: listAll });
});

categoriesRoutes.post("/create", (request, response) => {
  const { description, name } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  categoriesRepository.create({ description, name });

  return response.status(201).send();
});

export { categoriesRoutes };
