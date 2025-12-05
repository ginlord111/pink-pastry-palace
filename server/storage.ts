import type { Product, Order, InsertOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrderById(id: string): Promise<Order | undefined>;
  getAllOrders(): Promise<Order[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private orders: Map<string, Order>;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: Product[] = [
      {
        id: "1",
        name: "Butter Croissant",
        description:
          "Flaky, buttery layers of perfection. Our signature croissant is made with imported French butter.",
        price: 252.0,
        category: "Croissants",
        image: "/api/images/croissant",
        ingredients: "Flour, butter, sugar, yeast, salt, milk",
        allergens: "Gluten, Dairy",
      },
      {
        id: "2",
        name: "Sourdough Loaf",
        description:
          "Artisan sourdough with a crispy crust and tangy flavor. Naturally leavened for 24 hours.",
        price: 447.44,
        category: "Breads",
        image: "/api/images/sourdough",
        ingredients: "Flour, water, salt, sourdough starter",
        allergens: "Gluten",
      },
      {
        id: "3",
        name: "Chocolate Éclair",
        description:
          "Light choux pastry filled with vanilla cream and topped with rich chocolate ganache.",
        price: 308.0,
        category: "Pastries",
        image: "/api/images/eclair",
        ingredients: "Flour, eggs, butter, cream, chocolate, sugar",
        allergens: "Gluten, Dairy, Eggs",
      },
      {
        id: "4",
        name: "French Baguette",
        description:
          "Authentic French baguette with a golden crust and soft, airy interior.",
        price: 279.44,
        category: "Breads",
        image: "/api/images/baguette",
        ingredients: "Flour, water, yeast, salt",
        allergens: "Gluten",
      },
      {
        id: "5",
        name: "Cinnamon Roll",
        description:
          "Soft, gooey cinnamon roll drizzled with cream cheese frosting. A customer favorite!",
        price: 279.44,
        category: "Pastries",
        image: "/api/images/cinnamon-roll",
        ingredients: "Flour, butter, cinnamon, sugar, cream cheese",
        allergens: "Gluten, Dairy",
      },
      {
        id: "6",
        name: "Strawberry Cream Cake",
        description:
          "Light sponge cake layered with fresh strawberries and whipped cream.",
        price: 2352.0,
        category: "Cakes",
        image: "/api/images/strawberry-cake",
        ingredients: "Flour, eggs, sugar, cream, strawberries",
        allergens: "Gluten, Dairy, Eggs",
      },
      {
        id: "7",
        name: "Pain au Chocolat",
        description:
          "Buttery croissant dough wrapped around premium dark chocolate. Pure indulgence.",
        price: 279.44,
        category: "Croissants",
        image: "/api/images/pain-au-chocolat",
        ingredients: "Flour, butter, chocolate, sugar, yeast",
        allergens: "Gluten, Dairy",
      },
      {
        id: "8",
        name: "Brioche Buns",
        description:
          "Soft, buttery brioche buns perfect for burgers or enjoyed on their own. Pack of 4.",
        price: 503.44,
        category: "Breads",
        image: "/api/images/brioche",
        ingredients: "Flour, eggs, butter, sugar, yeast",
        allergens: "Gluten, Dairy, Eggs",
      },
    ];

    initialProducts.forEach((product) => {
      this.products.set(product.id, product);
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      id,
      status: "pending",
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrderById(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }
}

export const storage = new MemStorage();
