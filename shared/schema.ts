import { pgTable, text, varchar, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  ingredients: text("ingredients"),
  allergens: text("allergens"),
});

export const insertProductSchema = createInsertSchema(products);
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey(),
  productId: varchar("product_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({ id: true });
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type CartItem = typeof cartItems.$inferSelect;

export const orders = pgTable("orders", {
  id: varchar("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  zipCode: text("zip_code").notNull(),
  items: text("items").notNull(),
  subtotal: real("subtotal").notNull(),
  deliveryFee: real("delivery_fee").notNull(),
  total: real("total").notNull(),
  status: text("status").notNull().default("pending"),
});

export const insertOrderSchema = createInsertSchema(orders).omit({ id: true, status: true });
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

export type CartItemWithProduct = CartItem & { product: Product };

export const categories = ["All", "Breads", "Croissants", "Cakes", "Pastries"] as const;
export type Category = typeof categories[number];
