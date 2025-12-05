import { Croissant, Instagram, Facebook } from "lucide-react";
import { SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Croissant className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">Sweet Delights</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Artisan pastries and breads, crafted with passion using traditional recipes and the finest ingredients. Baked fresh daily for your enjoyment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li><a href="/checkout" className="hover:text-foreground">Checkout</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>CCS</li>
              <li>Pampanga State University</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-foreground">
                  09123456789
                </a>
              </li>
              <li>
                <a href="mailto:hello@sweetdelights.com" className="hover:text-foreground">
                  hello@sweetdelights.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>2025 Sweet Delights Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
