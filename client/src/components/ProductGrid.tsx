import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product, Category } from "@shared/schema";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  if (isLoading) {
    return (
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Our Products</h2>
          <p className="mt-2 text-muted-foreground">
            Freshly baked with love, every single day.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h2 className="font-serif text-3xl font-semibold tracking-tight" data-testid="text-products-heading">
          Our Products
        </h2>
        <p className="mt-2 text-muted-foreground">
          Freshly baked with love, every single day.
        </p>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg text-muted-foreground">No products found in this category.</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
