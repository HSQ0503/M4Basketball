import CustomHeading from "@/components/CustomHeading";
import ServiceCard from "@/components/ServiceCard";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getDictionary } from "@/i18n/getDictionary";
import { getSinglePage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import similarItems from "@/lib/utils/similarItems";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Service } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const services: Service[] = getSinglePage("services");

  const paths = services.map((service) => ({
    single: service.slug!,
  }));

  return paths;
};

const ServiceSingle = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const params = await props.params;
  const allServices = getSinglePage("services");
  const services = getSinglePage("services");
  const service = services.filter((page) => page.slug === params.single)[0];

  const { title, meta_title, description, image, banner } = service.frontmatter;

  const similarServices = similarItems(service, allServices, service.slug!) || [];
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
          <p
            className="text-base text-center text-primary mb-4"
            data-aos="fade-up-sm"
          >
            {dict.services.serviceLabel}
          </p>
          {title && (
            <CustomHeading
              as="h1"
              text={title}
              className="text-h2 md:text-h1 text-center text-balance mb-16 [&>br]:hidden"
              dataAos="fade-up-sm"
            />
          )}

          <div className="row justify-center lg:justify-between">
            <div data-aos="fade-up-sm" className="col-12">
              <ImageFallback
                src={banner!}
                alt={title!}
                width={1256}
                height={719}
                className="w-full aspect-video object-cover rounded-xl mb-11"
                loading="eager"
              />
            </div>
            <div className="col-12 lg:col-7 mb-11" data-aos="fade-up-sm">
              <article>
                <div className="content">
                  <MDXContent content={service.content} />
                </div>
              </article>
            </div>
            <div
              className="lg:col-5 w-fit"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              <div className="rounded-xl overflow-hidden lg:w-fit lg:ml-auto">
                <ImageFallback
                  src={banner!}
                  width={323}
                  height={230}
                  alt="apply banner"
                  loading="lazy"
                />
                <a
                  href={config.notification.link}
                  className="w-full font-semibold text-center block px-7.5 py-6 bg-secondary"
                >
                  {config.notification.label}
                </a>
                <a
                  href={config.navigation_button.link}
                  className="w-full font-semibold text-text-light text-center block px-7.5 py-6 bg-primary"
                >
                  {config.navigation_button.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <h2
            className="text-h3 md:text-h2 text-center mb-16"
            data-aos="fade-up-sm"
          >
            {dict.services.moreServices}
          </h2>

          <div className="row justify-center g-4">
            {similarServices.slice(0, 3).map((service, i: number) => (
              <div
                key={service.slug}
                className="xl:col-4 md:col-5 col-12"
                data-aos="fade-up-sm"
                data-aos-delay={`${i * 100}`}
              >
                <ServiceCard service={service as Service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction locale={locale} />
    </>
  );
};

export default ServiceSingle;
