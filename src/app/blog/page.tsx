import BlogCard from "@/components/BlogCard";
import CustomHeading from "@/components/CustomHeading";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post, RegularPage } from "@/types";

// for all regular pages
const Posts = () => {
  const postIndex: RegularPage = getListPage(`blog/-index.md`);
  const { title, meta_title, description, image, badge } =
    postIndex.frontmatter;
  const posts: Post[] = getSinglePage("blog");
  const sortedPosts = sortByDate(posts);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section mt-24 sm:mt-20">
        <div className="container">
          <div className="mx-auto text-center">
            {badge && (
              <p
                className="text-base text-primary mb-6"
                data-aos="fade-up-sm"
                dangerouslySetInnerHTML={markdownify(badge)}
              />
            )}
            {title && (
              <CustomHeading
                as="h1"
                text={title}
                className="text-h2 md:text-h1 mb-16"
                dataAos="fade-up-sm"
                dataAosDelay="100"
              />
            )}
          </div>

          <div className="row justify-center g-4">
            {sortedPosts.map((blog, i) => (
              <div
                key={i}
                className="xl:col-4 md:col-6 col-12"
                data-aos="zoom-in-sm"
                data-aos-delay={`${i * 100}`}
              >
                <BlogCard data={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
