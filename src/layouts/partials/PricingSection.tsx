import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const PricingSection = () => {
  const { pricing } = getListPage("services/-index.md").frontmatter;

  if (!pricing) return null;

  return (
    <section id="pricing" className="section bg-light">
      <div className="container">
        <div className="text-center mb-12">
          {pricing.subtitle && (
            <p
              dangerouslySetInnerHTML={markdownify(pricing.subtitle)}
              className="mb-6 text-base-sm text-primary"
              data-aos="fade-up-sm"
            />
          )}
          {pricing.title && (
            <CustomHeading
              as="h2"
              text={pricing.title}
              className="text-h3 md:text-h2 mb-6"
              dataAos="fade-up-sm"
              dataAosDelay="50"
            />
          )}
          {pricing.description && (
            <p
              className="text-lg text-text/80 max-w-2xl mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {pricing.description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.options &&
            pricing.options.map(
              (
                option: {
                  name: string;
                  price: string;
                  per: string;
                  max_size: string;
                  icon: string;
                  features: string[];
                  description: string;
                },
                i: number
              ) => (
                <div
                  key={i}
                  className={`bg-body rounded-xl p-8 shadow-lg border-2 ${
                    i === 0 ? "border-primary" : "border-transparent"
                  }`}
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 100}
                >
                  {i === 0 && (
                    <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                      Most Personalized
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <DynamicIcon
                        icon={option.icon}
                        className="text-2xl text-secondary"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{option.name}</h3>
                      <p className="text-sm text-text/60">{option.max_size}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {option.price}
                    </span>
                    <span className="text-text/60 ml-2">{option.per}</span>
                  </div>

                  <p className="text-text/80 mb-6">{option.description}</p>

                  <ul className="space-y-3">
                    {option.features.map((feature: string, j: number) => (
                      <li key={j} className="flex items-center gap-3">
                        <DynamicIcon
                          icon="FaCheck"
                          className="text-primary shrink-0"
                        />
                        <span className="text-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>

        <div
          className="mt-12 p-6 bg-body rounded-lg border border-border max-w-3xl mx-auto text-center"
          data-aos="fade-up-sm"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <DynamicIcon icon="FaMoneyBill" className="text-2xl text-primary" />
            <h4 className="text-lg font-semibold">Payment Methods</h4>
          </div>
          <p className="text-text/80">
            We accept <strong>Zelle</strong> and <strong>Cash</strong> payments
            only. Payment is due at the time of each session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
