import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const AppointmentPage = () => {
  const { title, subtitle, description, meta_title, contact_way } = getListPage(
    "appointment/-index.md",
  ).frontmatter;

  const { appointment_form_action }: { appointment_form_action: string } =
    config.params;
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
                <form action={appointment_form_action} method="POST">
                  <div className="row">
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="120"
                      >
                        <label htmlFor="f-name" className="form-label">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="f-name"
                          name="f-name"
                          className="form-input"
                          placeholder="Player's First Name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="140"
                      >
                        <label htmlFor="l-name" className="form-label">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="l-name"
                          name="l-name"
                          className="form-input"
                          placeholder="Player's Last Name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="160"
                      >
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="your@email.com"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="180"
                      >
                        <label htmlFor="phone" className="form-label">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="form-input"
                          placeholder="(555) 123-4567"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="200"
                      >
                        <label htmlFor="age" className="form-label">
                          Player Age <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="age"
                          name="age"
                          className="form-input"
                          placeholder="e.g., 13"
                          type="number"
                          min="11"
                          max="16"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="220"
                      >
                        <label htmlFor="skill-level" className="form-label">
                          Skill Level <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="skill-level"
                          name="skill-level"
                          className="form-input"
                          required
                        >
                          <option value="">Select Skill Level</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                          <option value="high-level">High-Level Competitive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="240"
                      >
                        <label htmlFor="message" className="form-label">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-input"
                          placeholder="Tell us about your basketball goals, previous training experience, or any questions..."
                          rows={6}
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="col-12"
                      data-aos="fade-up-sm"
                      data-aos-delay="260"
                    >
                      <CustomButton
                        label="Submit Application"
                        variant="primary"
                        button_type="submit"
                        className="w-full md:w-auto"
                      />
                    </div>
                  </div>
                </form>
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
                Contact us directly
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

      <CallToAction />
    </>
  );
};

export default AppointmentPage;
