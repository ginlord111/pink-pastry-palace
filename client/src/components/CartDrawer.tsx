import { Link } from "wouter";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getSubtotal,
    getDeliveryFee,
    getTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const subtotal = getSubtotal();
  const deliveryFee = getDeliveryFee();
  const total = getTotal();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md" data-testid="cart-drawer">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({items.length} {items.length === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-muted p-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Add some delicious pastries to get started!
              </p>
            </div>
            <Button onClick={() => setIsCartOpen(false)} data-testid="button-browse-products">
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                    data-testid={`cart-item-${item.productId}`}
                  >
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h4 className="font-medium leading-tight" data-testid={`text-cart-item-name-${item.productId}`}>
                          {item.product.name}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => removeFromCart(item.productId)}
                          data-testid={`button-remove-${item.productId}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm font-semibold" data-testid={`text-cart-item-price-${item.productId}`}>
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="mt-auto flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          data-testid={`button-decrease-${item.productId}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium" data-testid={`text-quantity-${item.productId}`}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          data-testid={`button-increase-${item.productId}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 border-t pt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span data-testid="text-cart-subtotal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span data-testid="text-cart-delivery">
                    {deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {subtotal > 0 && subtotal < 50 && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(50 - subtotal).toFixed(2)} more for free delivery!
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span data-testid="text-cart-total">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link href="/checkout">
                  <Button
                    className="w-full gap-2"
                    onClick={() => setIsCartOpen(false)}
                    data-testid="button-checkout"
                  >
                    Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => setIsCartOpen(false)}
                  data-testid="button-continue-shopping"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
