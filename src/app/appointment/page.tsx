import AppointmentForm from "@/components/AppointmentForm";
import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getDictionary } from "@/i18n/getDictionary";
import { getListPage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const AppointmentPage = async () => {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { title, subtitle, description, meta_title, contact_way } = getListPage(
    "appointment/-index.md",
    locale,
  ).frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <section className="section mt-24 sm:mt-20" data-aos="fade-up-sm">
        <div className="container">
          <div className="mb-24" data-aos="fade-up-sm">
            <p
              dangerouslySetInnerHTML={markdownify(subtitle!)}
              className="text-primary text-base-sm mb-4 text-left"
              data-aos="fade-up-sm"
            />

            <CustomHeading
              as="h1"
              text={title}
              className="text-h3 md:text-h2 lg:text-h1 text-left"
              dataAos="fade-up-sm"
            />
          </div>
          <div className="row justify-center lg:justify-between g-5">
            <div
              className="col-12 lg:col-6 order-2 lg:order-1"
              data-aos="fade-up-sm"
            >
              <div
                className="p-10 bg-light rounded-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <AppointmentForm dict={dict} />
              </div>
            </div>

            <div
              className="col-12 lg:col-6 order-1 lg:order-2"
              data-aos="fade-up-sm"
            >
              <h2
                className="mb-10 h4"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {dict.appointmentPage.contactDirectly}
              </h2>
              {contact_way.map((contact: { icon: string; value: string; name: string }, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mb-6 last:mb-0"
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 20}
                >
                  <DynamicIcon
                    icon={contact.icon}
                    className="mr-4 shrink-0 text-primary text-xl"
                  />
                  <p
                    className="mb-0"
                    dangerouslySetInnerHTML={markdownify(contact.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction locale={locale} />
    </>
  );
};

export default AppointmentPage;
