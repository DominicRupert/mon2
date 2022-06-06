import { pizzasService } from "../services/PizzasService.js";

import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class PizzasController extends BaseController {
  constructor() {
    super("api/pizzas");
    this.router
      .get("", this.getPizza)
      .post("", this.createPizza)
      .delete("/:name", this.deletePizza)
      .put("/:name", this.editPizza);
  }

  async getPizza(req, res, next) {
    try {
      const pizzas = await pizzasService.getPizza();
     return res.send(pizzas);
    } catch (error) {
      next(error);
    }
  }
  async createPizza(req, res, next) {
    try {
      const pizzas = await pizzasService.createPizza(req.body);
      return res.send(pizzas);
    } catch (error) {
      next(error);
    }
  }
  async deletePizza(req, res, next) {
    try {
      logger.log(req.params.name);
      let message = await pizzasService.deletePizza(req.params.name);
     return res.send(message);
    } catch (error) {
      next(error);
    }
  }

  async editPizza(req, res, next) {
    try {
      logger.log(req.body);
      let message = await pizzasService.editPizza(req.body, req.params.name);
     return res.send(message);
    } catch (error) {
      next(error);
    }
  }
}
