import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getDictionary } from "@/i18n/getDictionary";
import { getListPage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const Contact = async () => {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { title, description, meta_title, image, subtitle } =
    getListPage("contact/-index.md").frontmatter;

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
          <div className="mb-24">
            <p
              dangerouslySetInnerHTML={markdownify(subtitle!)}
              className="text-primary text-base-sm mb-4 text-left"
              data-aos="fade-up-sm"
            />

            <CustomHeading
              as="h1"
              text={title}
              className="text-h2 lg:text-h1 text-left"
              dataAos="fade-up-sm"
              dataAosDelay="80"
            />
          </div>
          <div className="row justify-center items-center g-5">
            <div className="col-12 lg:col-6 order-2 lg:order-1">
              <div
                className="p-10 bg-light rounded-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <h3 className="h4 mb-6" data-aos="fade-up-sm" data-aos-delay="120">
                  {dict.contact.howToSignUp}
                </h3>
                <p className="text-lg mb-8" data-aos="fade-up-sm" data-aos-delay="140">
                  {dict.contact.signUpDescription}
                </p>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div
                    className="flex items-start gap-4"
                    data-aos="fade-up-sm"
                    data-aos-delay="160"
                  >
                    <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <DynamicIcon icon="FaPhone" className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{dict.contact.phone}</h4>
                      <a
                        href="tel:6893279465"
                        className="text-xl text-primary hover:underline"
                      >
                        (689) 327-9465
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-4"
                    data-aos="fade-up-sm"
                    data-aos-delay="180"
                  >
                    <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <DynamicIcon icon="FaEnvelope" className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{dict.contact.email}</h4>
                      <a
                        href="mailto:marcelo@m4basketball.com"
                        className="text-xl text-primary hover:underline break-all"
                      >
                        marcelo@m4basketball.com
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-8 p-6 bg-body border-l-4 border-primary"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  <p className="text-base text-text/80">
                    <strong>{dict.contact.notePrefix}</strong> {dict.contact.noteText}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-12 lg:col-6 order-1 lg:order-2"
              data-aos="fade-up-sm"
            >
              <ImageFallback
                src={image!}
                alt={title!}
                width={570}
                height={806}
                className="object-cover mx-auto max-lg:w-3/4"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <CallToAction locale={locale} />
    </>
  );
};

export default Contact;
