import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";

const ServiceCard = ({ service }: { service: Service }) => {
  const { title, date, categories, banner } = service.frontmatter;

  return (
    <>
      {banner && (
        <a href={`/services/${service.slug}`}>
          <ImageFallback
            src={banner}
            alt={title!}
            width={389}
            height={277}
            className="object-cover rounded-t w-full"
          />
        </a>
      )}

      <div className="p-6">
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
        <a href={`/services/${service.slug}`}>
          <h5
            dangerouslySetInnerHTML={markdownify(title!)}
            className="h6 md:h5 [&>br]:hidden"
          />
        </a>
      </div>
    </>
  );
};

export default ServiceCard;
