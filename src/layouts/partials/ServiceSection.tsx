import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";
import React from "react";

const ServiceSection = ({ hero }: { hero?: boolean }) => {
  const { homepage_section_enable, subtitle, descriptions, title, home_title, program_details } =
    getListPage("services/-index.md").frontmatter;
  const allServices = getSinglePage("services");
  return (
    <>
      {homepage_section_enable && (
        <section
          className={`section ${hero && "mt-24 sm:mt-20"} ${!hero && "pt-0"}`}
        >
          <div className="container">
            <div className="row max-md:gy-5 md:g-1 lg:g-4 justify-center md:justify-between items-center">
              <div className="md:col-6 col-12">
                {subtitle && (
                  <p
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                    className={`mb-6 text-base-sm text-primary text-center md:text-left`}
                    data-aos="fade-up-sm"
                  />
                )}
                {hero ? (
                  <CustomHeading
                    as="h1"
                    text={title}
                    className={`text-h2-sm lg:text-h1-sm lg:leading-[70px] text-center md:text-left max-xl:[&>br]:hidden`}
                    dataAos="fade-up-sm"
                  />
                ) : (
                  <CustomHeading
                    as="h2"
                    text={home_title}
                    className="text-h3 md:text-h2-sm text-balance text-center md:text-left"
                    dataAos="fade-up-sm"
                  />
                )}
              </div>
              <div className="col-6 md:w-[44%] col-12">
                {descriptions &&
                  descriptions.map((desc: string, i: number) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={markdownify(desc)}
                      className={`mb-6 last:mb-0 text-center md:text-left`}
                      data-aos="fade-up-sm"
                      data-aos-delay={50 + i * 50}
                    />
                  ))}
              </div>

              <div className="col-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10 mt-10 lg:mt-16">
                  {program_details && program_details.map((detail: { name: string; icon: string; content: string; link?: string }, i: number) => (
                    <div
                      key={`detail-${i}`}
                      className="group"
                      data-aos="fade-right-sm"
                      data-aos-delay={100 + i * 50}
                    >
                      <div className="group-child">
                        <DynamicIcon
                          icon={detail.icon}
                          className="mb-6 text-5xl p-2 rounded bg-secondary/70"
                        />

                        <p className="text-xl font-medium mb-3 leading-[33px] w-fit">
                          {detail.name}
                        </p>

                        <p className="text-base text-text/80">
                          {detail.content}
                        </p>

                        {detail.link && (
                          <a
                            href={detail.link}
                            className="inline-block mt-4 text-sm font-medium text-primary hover:text-secondary transition-colors"
                          >
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceSection;
