import { Button } from "@/components/ui/button";
import { categories, type Category } from "@shared/schema";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-[65px] z-40 -mx-4 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="rounded-full"
            data-testid={`button-category-${category.toLowerCase()}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
