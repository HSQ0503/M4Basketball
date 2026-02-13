import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/lib/getLocale";
import SeoMeta from "@/partials/SeoMeta";
import { FaCircleCheck } from "react-icons/fa6";

const AppointmentSuccessPage = async () => {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <SeoMeta
        title={dict.appointmentSuccess.seoTitle}
        meta_title={dict.appointmentSuccess.seoTitle}
        description={dict.appointmentSuccess.seoDescription}
      />
      <section className="section mt-24 sm:mt-20" data-aos="fade-up-sm">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div
              className="mb-8 flex justify-center"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              <FaCircleCheck className="text-primary h-24 w-24" />
            </div>

            <CustomHeading
              as="h1"
              text={dict.appointmentSuccess.heading}
              className="text-h3 md:text-h2 lg:text-h1 mb-6"
              dataAos="fade-up-sm"
            />

            <p
              className="text-dark/70 mb-8 text-lg"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              {dict.appointmentSuccess.thankYou}
            </p>

            <p
              className="text-dark/70 mb-12 text-lg"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              {dict.appointmentSuccess.nextSteps}
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <CustomButton label={dict.appointmentSuccess.backHome} link="/" variant="primary" />
              <CustomButton
                label={dict.appointmentSuccess.learnAbout}
                link="/about"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSuccessPage;
