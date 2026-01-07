import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const Contact = async () => {
  const { title, description, meta_title, image, subtitle } =
    getListPage("contact/-index.md").frontmatter;
  const { contact_form_action } = config.params;

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
                <form action={contact_form_action} method="POST">
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
                          placeholder="Tell us about your basketball goals, experience, or any questions you have..."
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
                        label="Submit Inquiry"
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
      <CallToAction />
    </>
  );
};

export default Contact;
