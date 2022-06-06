let pizzaDb = {
  Pizza: [
    { name: "Cheese", price: 10, toppings: 1 },
    { name: "pep", price: 10, toppings: 1 },
    { name: "onion", price: 10, toppings: 1 },
    { name: "onion", price: 10, toppings: 1 },
    { name: "onion", price: 10, toppings: 1 },
    { name: "onion", price: 10, toppings: 1 },
  ],
};

class PizzaService {
  async getPizza() {
    return pizzaDb.Pizza;
  }

  createPizza(pizzaData) {
    pizzaDb.Pizza.push(pizzaData);
    return pizzaData;
  }

  async deletePizza(name) {
    pizzaDb.Pizza = pizzaDb.Pizza.filter((pizza) => pizza.name != name);
  }
  async editPizza(body, name) {
    const pizza = pizzaDb.Pizza.find((pizza) => pizza.name == name);
    pizza.name = body.name;
    pizza.price = body.price;
    pizza.toppings = body.toppings;
    return pizza;
  }
}

export const pizzasService = new PizzaService();
