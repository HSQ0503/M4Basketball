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
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="120"
                      >
                        <label htmlFor="f-name" className="form-label">
                          {" "}
                          First Name{" "}
                        </label>
                        <input
                          id="f-name"
                          name="f-name"
                          className="form-input"
                          placeholder="Your First Name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="140"
                      >
                        <label htmlFor="l-name" className="form-label">
                          {" "}
                          Last Name{" "}
                        </label>
                        <input
                          id="l-name"
                          name="l-name"
                          className="form-input"
                          placeholder="Your Last Name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="160"
                      >
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="Your Email Address"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="180"
                      >
                        <label htmlFor="message" className="form-label">
                          {" "}
                          Message{" "}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-input"
                          placeholder="How can we help you?"
                          rows={9}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="col"
                      data-aos="fade-up-sm"
                      data-aos-delay="200"
                    >
                      <CustomButton
                        label="Send A Message"
                        variant="primary"
                        button_type="submit"
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
