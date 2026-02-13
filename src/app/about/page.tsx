import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const About = async () => {
  const locale = await getLocale();
  const data = getListPage("about/-index.md", locale);
  const { frontmatter } = data;
  const { title, meta_title, description, image, bio } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      {/* Bio Section */}
      {bio && (
        <section className="section pb-0">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-12">
              {bio.subtitle && (
                <p
                  dangerouslySetInnerHTML={markdownify(bio.subtitle)}
                  className="mb-4 text-base-sm text-primary"
                  data-aos="fade-up-sm"
                />
              )}
              {bio.title && (
                <CustomHeading
                  as="h1"
                  text={bio.title}
                  className="text-h2 md:text-h1 mb-4"
                  dataAos="fade-up-sm"
                  dataAosDelay="50"
                />
              )}
              {bio.role && (
                <p
                  className="text-lg text-text/70 font-medium"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {bio.role}
                </p>
              )}
            </div>

            {/* Main bio content: image + text */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: Main image + secondary images */}
              <div
                className="lg:w-[40%] w-full shrink-0"
                data-aos="fade-right-sm"
              >
                {bio.image && (
                  <div className="relative rounded-xl overflow-hidden shadow-xl mb-6">
                    <ImageFallback
                      src={bio.image}
                      alt="Marcelo Machado"
                      width={600}
                      height={700}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                )}
                {bio.images && (
                  <div className="grid grid-cols-2 gap-4">
                    {bio.images.map((img: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden shadow-md"
                        data-aos="zoom-in-sm"
                        data-aos-delay={150 + i * 100}
                      >
                        <ImageFallback
                          src={img}
                          alt={`Marcelo Machado career ${i + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Bio text */}
              <div className="lg:w-[60%]">
                {bio.paragraphs &&
                  bio.paragraphs.map((paragraph: string, i: number) => (
                    <p
                      key={i}
                      className={`text-text/80 leading-relaxed ${
                        i === 0 ? "text-lg font-medium text-text" : ""
                      } ${i < bio.paragraphs.length - 1 ? "mb-5" : ""}`}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + i * 50}
                    >
                      {paragraph}
                    </p>
                  ))}

                {/* CTA button */}
                <div
                  className="mt-8"
                  data-aos="fade-up-sm"
                  data-aos-delay="400"
                >
                  <CustomButton
                    link="/appointment"
                    label={locale === "pt" ? "Inscreva-se para Treinar" : "Apply for Training"}
                    variant="primary"
                    icon="FaBasketball"
                  />
                </div>
              </div>
            </div>

            {/* Career highlights grid */}
            {bio.highlights && (
              <div className="mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {bio.highlights.map(
                    (
                      highlight: {
                        icon: string;
                        label: string;
                        detail: string;
                      },
                      i: number,
                    ) => (
                      <div
                        key={i}
                        className="bg-light rounded-xl p-6 text-center border border-border"
                        data-aos="fade-up-sm"
                        data-aos-delay={100 + i * 75}
                      >
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <DynamicIcon
                            icon={highlight.icon}
                            className="text-2xl text-primary"
                          />
                        </div>
                        <h4 className="font-bold text-lg mb-1">
                          {highlight.label}
                        </h4>
                        <p className="text-sm text-text/60">
                          {highlight.detail}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <CallToAction locale={locale} />
    </>
  );
};

export default About;
