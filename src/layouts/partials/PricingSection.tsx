import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

const PricingSection = ({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) => {
  const { pricing, training_groups } = getListPage(
    "services/-index.md",
    locale,
  ).frontmatter;

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
                  frequency: string;
                  icon: string;
                  features: string[];
                  description: string;
                },
                i: number,
              ) => (
                <div
                  key={i}
                  className={`bg-body rounded-xl p-8 shadow-lg border-2 ${
                    i === 1 ? "border-primary" : "border-transparent"
                  }`}
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 100}
                >
                  {i === 1 && (
                    <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                      {dict.pricing.recommended}
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
                      <p className="text-sm text-text/60">
                        {option.frequency}
                      </p>
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
              ),
            )}
        </div>

        {/* Training Groups Section */}
        {training_groups && (
          <div id="groups" className="mt-16">
            <div className="text-center mb-10">
              {training_groups.subtitle && (
                <p
                  dangerouslySetInnerHTML={markdownify(
                    training_groups.subtitle,
                  )}
                  className="mb-4 text-base-sm text-primary"
                  data-aos="fade-up-sm"
                />
              )}
              {training_groups.title && (
                <CustomHeading
                  as="h3"
                  text={training_groups.title}
                  className="text-h4 md:text-h3 mb-4"
                  dataAos="fade-up-sm"
                  dataAosDelay="50"
                />
              )}
              {training_groups.description && (
                <p
                  className="text-lg text-text/80 max-w-2xl mx-auto"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {training_groups.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {training_groups.groups.map(
                (
                  group: {
                    name: string;
                    age_range: string;
                    level: string;
                    icon: string;
                    description: string;
                  },
                  i: number,
                ) => (
                  <div
                    key={i}
                    className="bg-body rounded-xl p-6 shadow-md border border-border text-center"
                    data-aos="fade-up-sm"
                    data-aos-delay={100 + i * 75}
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <DynamicIcon
                        icon={group.icon}
                        className="text-xl text-secondary"
                      />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{group.name}</h4>
                    <p className="text-sm text-text/70">{group.description}</p>
                  </div>
                ),
              )}
            </div>

            {training_groups.min_athletes_note && (
              <div
                className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-3xl mx-auto text-center"
                data-aos="fade-up-sm"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-center gap-3">
                  <DynamicIcon
                    icon="FaCircleInfo"
                    className="text-lg text-amber-600 shrink-0"
                  />
                  <p className="text-amber-800 font-medium">
                    {training_groups.min_athletes_note}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <div
          className="mt-12 p-6 bg-body rounded-lg border border-border max-w-3xl mx-auto text-center"
          data-aos="fade-up-sm"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <DynamicIcon
              icon="FaMoneyBill"
              className="text-2xl text-primary"
            />
            <h4 className="text-lg font-semibold">
              {dict.pricing.paymentMethods}
            </h4>
          </div>
          <p
            className="text-text/80"
            dangerouslySetInnerHTML={{
              __html: dict.pricing.paymentDescription,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
