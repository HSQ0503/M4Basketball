export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
    badge?: string;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Service = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    icon: string;
    banner: string;
    categories: string[];
    date?: string;
    weight?: number;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Menu = {
  name: string;
  children?: {
    name: string;
    url: string;
  }[];
};

export type Testimonial = {
  enable: boolean;
  review: Array<{
    name: string;
    about: string;
    image: string;
    says: string;
  }>;
};
