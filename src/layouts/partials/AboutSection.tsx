import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutSection = () => {
  const { about } = getListPage("homepage/-index.md").frontmatter;

  return (
    <>
      {about.enable && (
        <section className="section pt-0 lg:pb-44">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between gap-32 lg:gap-10 items-center">
              <div className="lg:w-[55%]">
                <div className="relative">
                  <ImageFallback
                    src={about.images[0]}
                    alt="about images"
                    width={549}
                    height={465}
                    className="rounded top-0 xl:-top-12 w-[80%]"
                    data_aos="zoom-in-sm"
                  />
                  <ImageFallback
                    src={about.images[1]}
                    alt="about images"
                    width={470}
                    height={317}
                    className="absolute rounded right-0 -bottom-20 w-[60%]"
                    data_aos="zoom-in-sm"
                    data_aos_delay="20"
                  />
                  <div data-aos="zoom-in-sm" data-aos-delay="40">
                    <ImageFallback
                      src={about.badge}
                      alt={about.badge}
                      width={223}
                      height={223}
                      className="hidden md:block absolute right-0 top-1/2 translate-y-[-140%] translate-x-[40%] spin-animation scale-80 w-[30%]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[33%]">
                <p
                  dangerouslySetInnerHTML={markdownify(about.subtitle)}
                  className="mb-7 text-base-sm text-primary text-center lg:text-left"
                  data-aos="fade-up-sm"
                />

                <CustomHeading
                  as="h2"
                  text={about.title}
                  className="text-h3 md:text-h2 text-balance mb-7 text-center lg:text-left"
                  dataAos="fade-up-sm"
                  dataAosDelay="50"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(about.content)}
                  className="mb-8 text-center lg:text-left"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />

                {about.schedule.map((s: { day: string; time: string }, i: number) => (
                  <p
                    key={i}
                    className="font-medium text-base text-center lg:text-left"
                    data-aos="fade-up-sm"
                    data-aos-delay={100 + i * 50}
                  >
                    <span dangerouslySetInnerHTML={markdownify(s.day)} />
                    <span dangerouslySetInnerHTML={markdownify(s.time)} />
                  </p>
                ))}
                {about.button.enable && (
                  <div
                    className="w-full flex justify-center lg:justify-start"
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                  >
                    <CustomButton
                      link={about.button.link}
                      label={about.button.label}
                      className="mt-8 btn-sm! sm:btn!"
                      variant="secondary"
                      icon={about.button.icon}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSection;
