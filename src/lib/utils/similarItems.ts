import { Post } from "@/types";

// similar products
const similarItems = (
  currentItem: Post,
  allItems: Post[],
  slug: string,
): Post[] => {
  let categories: string[] = [];

  // set categories
  if (currentItem.frontmatter.categories.length > 0) {
    categories = currentItem.frontmatter.categories;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) =>
      item.frontmatter.categories.includes(category),
    ),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarItems;
