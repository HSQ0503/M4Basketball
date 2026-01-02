import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";
import React from "react";

const ServiceSection = ({ hero }: { hero?: boolean }) => {
  const { homepage_section_enable, subtitle, descriptions, title, home_title } =
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
                <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 lg:mt-16 max-lg:gap-10 gap-y-5">
                  {allServices.map((service: Service, i: number) => (
                    <React.Fragment key={i}>
                      <div
                        className="group"
                        data-aos="fade-right-sm"
                        data-aos-delay={100 + i * 50}
                      >
                        <div className="group-child">
                          {service?.frontmatter?.icon && (
                            <DynamicIcon
                              icon={service?.frontmatter?.icon}
                              className="mb-6 text-5xl p-2 rounded bg-secondary/70"
                            />
                          )}

                          <p
                            dangerouslySetInnerHTML={markdownify(
                              service.frontmatter.title!,
                            )}
                            className="text-xl font-medium mb-3 leading-[33px] [&>br]:block w-fit"
                          />

                          <div className="relative overflow-hidden w-fit">
                            <a
                              href={`/services/${service.slug}`}
                              className="font-medium text-nowrap inline-block group text-base-sm"
                            >
                              <span className="-translate-x-[86%] transform transition-transform duration-300 inline-flex items-center group-hover:translate-x-0">
                                Discover More
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 ml-1"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {i !== allServices.length - 1 && (
                        <hr className="w-30 hidden lg:block border-border rotate-90" />
                      )}
                    </React.Fragment>
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
