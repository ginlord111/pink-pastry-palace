import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/bakery_display_case__4f15cec1.jpg";

export function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Artisan Pastries,
            <br />
            <span className="text-primary-foreground">Baked Fresh Daily</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            Discover our handcrafted selection of breads, pastries, and cakes. 
            Made with love using traditional recipes and the finest ingredients.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="gap-2"
              data-testid="button-shop-now"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm"
              data-testid="button-view-menu"
            >
              View Full Menu
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-white/70">Products</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-white">Fresh</p>
              <p className="text-sm text-white/70">Daily Baked</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-white">Free</p>
              <p className="text-sm text-white/70">Delivery ₱50+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
