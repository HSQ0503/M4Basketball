import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CustomerSection = () => {
  const { customer } = getListPage("homepage/-index.md").frontmatter;
  return (
    <>
      {customer.enable && (
        <section className="section-sm pt-0">
          <div className="container">
            <div className="text-center mb-12">
              <CustomHeading
                as="h2"
                text={customer.title.value}
                className="text-h3 md:text-h2 text-primary mb-3 px-4"
                dataAos="fade-up-sm"
              />
              <p
                dangerouslySetInnerHTML={markdownify(customer.title.text)}
                className="font-medium text-base md:text-lg text-text/80 px-4"
                data-aos="fade-up-sm"
                data-aos-delay="20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customer.accomplishments.map((item: { icon: string; text: string }, i: number) => (
                <div
                  key={i}
                  className="group relative bg-light hover:bg-primary/5 rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-border hover:border-primary/30"
                  data-aos="fade-up-sm"
                  data-aos-delay={i * 50}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <DynamicIcon
                        icon={item.icon}
                        className="text-2xl text-primary"
                      />
                    </div>
                    <p className="text-base text-text/90 leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CustomerSection;
