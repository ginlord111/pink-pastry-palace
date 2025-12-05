import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to create order" });
      }
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const order = await storage.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  const imageMap: Record<string, string> = {
    croissant: "butter_croissant_product_photo.png",
    sourdough: "sourdough_bread_product_photo.png",
    eclair: "chocolate_éclair_product_photo.png",
    baguette: "fresh_baguette_product_photo.png",
    "cinnamon-roll": "cinnamon_roll_product_photo.png",
    "strawberry-cake": "strawberry_cake_product_photo.png",
    "pain-au-chocolat": "pain_au_chocolat_photo.png",
    brioche: "brioche_buns_product_photo.png",
  };

  app.get("/api/images/:name", (req, res) => {
    const imageName = imageMap[req.params.name];
    if (!imageName) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    const imagePath = path.join(process.cwd(), "attached_assets", "generated_images", imageName);
    
    if (fs.existsSync(imagePath)) {
      res.sendFile(imagePath);
    } else {
      res.status(404).json({ error: "Image file not found" });
    }
  });

  return httpServer;
}
