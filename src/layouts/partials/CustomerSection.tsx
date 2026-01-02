import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CustomerSection = () => {
  const { customer } = getListPage("homepage/-index.md").frontmatter;
  return (
    <>
      {customer.enable && (
        <section className="section-sm pt-0">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-end gap-y-10 lg:gap-4">
              <div className="text-center lg:text-left">
                <CustomHeading
                  as="h1"
                  text={customer.title.value}
                  className="text-h1 text-primary"
                  dataAos="fade-up-sm"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(customer.title.text)}
                  className="font-medium text-lg"
                  data-aos="fade-up-sm"
                />
              </div>

              <div className="row justify-around max-md:g-3">
                {customer.logo.map((logo: string, i: number) => (
                  <div className="col-6 sm:col" key={i}>
                    <ImageFallback
                      src={logo}
                      alt="logo"
                      width={168}
                      height={41}
                      className="mx-auto"
                      data_aos="fade-left-sm"
                      data_aos_delay={i * 50}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CustomerSection;
