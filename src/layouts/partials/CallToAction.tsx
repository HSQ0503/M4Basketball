import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction = () => {
  const { enable, image, title, subtitle, content, buttons } = getListPage(
    "sections/call-to-action.md",
  ).frontmatter;
  return (
    <>
      {enable && (
        <section
          className="section py-[132px] max-md:pt-20 max-lg:pb-0 bg-primary relative overflow-hidden"
          data-aos="fade-in-sm"
        >
          <div className="container cta-container">
            {subtitle && (
              <p
                dangerouslySetInnerHTML={markdownify(subtitle)}
                className="mb-6 md:mb-4 text-base-sm text-text-light max-lg:text-center text-balance"
                data-aos="fade-up-sm"
              />
            )}
            {title && (
              <CustomHeading
                as="h2"
                svgColor="text-secondary"
                text={title}
                className="text-h3 md:text-h2 mb-8 md:mb-6 text-text-light max-lg:text-center [&>br]:block"
                dataAos="fade-up-sm"
                dataAosDelay="50"
              />
            )}
            {content && (
              <p
                dangerouslySetInnerHTML={markdownify(content)}
                className="mb-10 text-text-light/80 text-balance font-light max-lg:text-center"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              />
            )}

            <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
              {buttons &&
                buttons.map(
                  (b: { enable: boolean; link: string; label: string; icon?: string }, i: number) =>
                    b.enable && (
                      <CustomButton
                        key={i}
                        link={b.link}
                        label={b.label}
                        className="w-fit"
                        variant={i % 2 === 0 ? "secondary" : "light"}
                        data_aos="fade-up-sm"
                        data_aos_delay={(100 + i * 50)}
                        icon={b?.icon && b?.icon}
                      />
                    ),
                )}
            </div>
          </div>
          {image && (
            <div className=" lg:absolute lg:bottom-0 lg:right-0 xl:w-auto lg:w-[44%] max-lg:w-[80%] max-lg:mx-auto">
              <ImageFallback
                src={image}
                width={750}
                height={608}
                alt="Call to action"
                className="object-cover"
                data_aos="fade-left-sm"
                data_aos_delay="250"
              />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default CallToAction;
