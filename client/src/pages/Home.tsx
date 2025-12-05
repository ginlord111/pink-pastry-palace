import { useQuery } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import type { Product } from "@shared/schema";

export default function Home() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid products={products} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
