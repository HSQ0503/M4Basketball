import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, markdownify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

const BlogCard = ({ data }: { data: Post }) => {
  const { title, image, categories, date } = data.frontmatter;
  return (
    <div className="h-full">
      {image && (
        <a href={`/blog/${data.slug}`}>
          <ImageFallback
            src={image}
            alt={title!}
            width={389}
            height={277}
            className="object-cover rounded-t w-full"
            loading="lazy"
          />
        </a>
      )}
      <div className="p-9 bg-light rounded-b">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          {categories!.map((category: string, index: number) => (
            <p key={index} className="text-primary">
              {humanize(category)}
              {index !== categories!.length - 1 && ","}
            </p>
          ))}
          <div className="bg-black/30 h-[3px] w-[3px] rounded-full opacity-100"></div>

          <p className="text-text/50 text-base">{dateFormat(date!)}</p>
        </div>
        <a href={`/blog/${data.slug}`} className="block">
          <span
            dangerouslySetInnerHTML={markdownify(title!)}
            className="text-xl font-medium"
          />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
