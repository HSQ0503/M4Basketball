import BlogCard from "@/components/BlogCard";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similarItems from "@/lib/utils/similarItems";
import { humanize } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage("blog");

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = async (props: { params: Promise<{ single: string }> }) => {
  const params = await props.params;
  const posts: Post[] = getSinglePage("blog");
  const post = posts.filter((page: Post) => page.slug === params.single)[0];

  const { title, meta_title, description, image, categories, date } =
    post.frontmatter;
  const similarPosts = similarItems(post, posts, post.slug!)?.slice(0, 3);

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
          <div className="flex items-center justify-center gap-2.5 mb-6">
            {categories?.map((category: string, index: number) => (
              <p key={category} className="text-primary">
                {humanize(category)}
                {index !== categories!.length - 1 && ","}
              </p>
            ))}
            <div className="bg-black/30 h-[3px] w-[3px] rounded-full opacity-100"></div>
            <p className="text-text/50 text-base">{dateFormat(date!)}</p>
          </div>
          {title && (
            <CustomHeading
              as="h1"
              text={title}
              className="text-h2 md:text-h1 text-balance text-center mb-16"
              dataAos="fade-up-sm"
            />
          )}
          <div className="row justify-center">
            <div className="lg:px-25 col-12" data-aos="zoom-in-sm">
              <ImageFallback
                src={image!}
                alt={image!}
                width={1256}
                height={719}
                className="w-full aspect-video object-cover rounded-xl mb-11"
                loading={"eager"}
              />
            </div>
            <div className="col-12 mb-11">
              <article className="lg:px-25" data-aos="fade-up-sm">
                <div className="content">
                  <MDXContent content={post.content} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <>
        {similarPosts.length > 0 && (
          <>
            <hr className="border-border" />

            <section className="section">
              <div className="container">
                <h2
                  className="text-h3 md:text-h2 mb-16 text-center"
                  data-aos="fade-up-sm"
                >
                  Read more articles
                </h2>
                <div className="row justify-center g-5">
                  {similarPosts.slice(0, 3).map((post: Post, i: number) => (
                    <div
                      key={post.slug}
                      className="xl:col-4 md:col-6 col-12 min-h-full"
                      data-aos="zoom-in-sm"
                      data-aos-delay={`${i * 100}`}
                    >
                      <BlogCard data={post} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </>
      <CallToAction />
    </>
  );
};

export default PostSingle;
