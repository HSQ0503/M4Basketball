import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import SeoMeta from "@/partials/SeoMeta";
import { FaCircleCheck } from "react-icons/fa6";

const AppointmentSuccessPage = () => {
  return (
    <>
      <SeoMeta
        title="Application Submitted | M4 Basketball Training"
        meta_title="Application Submitted | M4 Basketball Training"
        description="Thank you for your application. We will be in touch soon."
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
              text="Application **Submitted!**"
              className="text-h3 md:text-h2 lg:text-h1 mb-6"
              dataAos="fade-up-sm"
            />

            <p
              className="text-dark/70 mb-8 text-lg"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              Thank you for your interest in M4 Basketball Training. We have
              received your application and will review it shortly.
            </p>

            <p
              className="text-dark/70 mb-12 text-lg"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              Coach Marcelinho or a member of our team will contact you within
              24-48 hours to discuss the next steps.
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <CustomButton label="Back to Home" link="/" variant="primary" />
              <CustomButton
                label="Learn About Our Training"
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
