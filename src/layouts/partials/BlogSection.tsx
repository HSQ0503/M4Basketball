import BlogCard from "@/components/BlogCard";
import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";

const BlogSection = ({ locale }: { locale?: Locale }) => {
  const allPosts = getSinglePage("blog");
  const { blog } = getListPage("homepage/-index.md", locale).frontmatter;
  const dict = locale ? getDictionary(locale) : null;
  return (
    <>
      {blog.enable && (
        <section className="section bg-light">
          <div className="container">
            <p
              dangerouslySetInnerHTML={markdownify(blog.subtitle)}
              className="mb-5 text-base-sm text-primary text-center"
              data-aos="fade-up-sm"
            />
            <CustomHeading
              as="h2"
              text={blog.title}
              className="text-h3 md:text-h2 mb-16 text-center"
              dataAos="fade-up-sm"
              dataAosDelay="50"
            />

            <div className="row mb-12 justify-center">
              {allPosts.slice(0, 3).map((blog: Post, i: number) => (
                <div
                  key={i}
                  className="col-12 md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 50}
                >
                  <BlogCard data={blog} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Link
                href="/blog"
                className="font-semibold flex items-center"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                {dict?.blog?.readAll ?? "Read All Articles"}
                <DynamicIcon
                  icon="FaArrowRightLong"
                  className="inline-block ml-2.5 text-center mx-auto"
                />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogSection;
