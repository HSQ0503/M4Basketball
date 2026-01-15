"use client";

import config from "@/config/config.json";
import menu from "@/config/menu.json";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const Footer = () => {
  const { copyright, footer_description } = config.params;
  const { footer } = menu;

  return (
    <footer className="section lg:py-[135px] bg-text">
      <div className="container">
        <div className="row max-lg:g-5 max-md:justify-center">
          <div className="col-12 lg:col-6 min-h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <ImageFallback
                  src={config.site.footer_logo}
                  width={184}
                  height={53}
                  alt="footer logo"
                  data-aos="fade-in-sm"
                  className="mb-4"
                />

                <p
                  className="text-base-sm text-text-light/60"
                  dangerouslySetInnerHTML={markdownify(footer_description)}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />
              </div>

              <p
                className="hidden lg:block text-base-sm text-text-light/60 [&>a]:text-text-light max-lg:mt-10"
                dangerouslySetInnerHTML={markdownify(copyright)}
                data-aos="fade-up-sm"
              />
            </div>
          </div>
          <div className="col-12 lg:col-6">
            <div className="row max-md:gy-5 justify-between">
              {footer.map((menu, index) => (
                <div
                  key={index}
                  className="col-6 md:col-3 pr-0"
                  data-aos="fade-up-sm"
                  data-aos-delay={50 + index * 50}
                >
                  <p className="mb-8 font-medium text-text-light">
                    {menu.title}
                  </p>
                  <ul>
                    {menu.children.map((child) => (
                      <li
                        key={child.name}
                        className="mb-4 last:mb-0 text-text-light/80 text-base-sm hover:text-secondary hover:underline transition-all duration-300 ease-in-out"
                      >
                        <a href={child.url}>
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <p
            className="text-base-sm text-text-light/60 [&>a]:text-text-light max-lg:mt-10"
            dangerouslySetInnerHTML={markdownify(copyright)}
            data-aos="fade-up-sm"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
