import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card
      className="group overflow-visible transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      data-testid={`card-product-${product.id}`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-md">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
            onClick={handleAddToCart}
            data-testid={`button-add-cart-${product.id}`}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3
            className="font-semibold leading-tight"
            data-testid={`text-product-name-${product.id}`}
          >
            {product.name}
          </h3>
          <p
            className="mt-1 line-clamp-2 text-sm text-muted-foreground"
            data-testid={`text-product-desc-${product.id}`}
          >
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span
              className="text-lg font-bold"
              data-testid={`text-product-price-${product.id}`}
            >
              ₱ {product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              data-testid={`button-add-${product.id}`}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
