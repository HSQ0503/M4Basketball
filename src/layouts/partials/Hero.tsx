import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const Hero = () => {
  const { hero } = getListPage("homepage/-index.md").frontmatter;

  return (
    <section
      className="section relative mb-22 bg-cover bg-no-repeat hero-banner"
      style={{
        backgroundImage: `url('${hero.image}')`,
      }}
    >
      <div className="container pt-24 sm:pt-20 pb-[280px] lg:pb-[228px] relative z-20">
        <p
          dangerouslySetInnerHTML={markdownify(hero.subtitle)}
          className="text-lg mb-5 text-center lg:text-left"
          data-aos="fade-up-sm"
          data-aos-delay="20"
        />
        <CustomHeading
          as="h1"
          text={hero.title}
          className="h3 lg:text-[72px] xl:text-[80px] xl:tracking-[-3px] xl:leading-[88px] mb-9 text-center lg:text-left text-balance"
          dataAos="fade-up-sm"
          dataAosDelay="40"
        />
        <div
          className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4"
          data-aos="fade-up-sm"
          data-aos-delay="60"
        >
          {hero.buttons.map(
            (b: { enable: boolean; link: string; label: string; icon?: string }, i: number) =>
              b.enable && (
                <CustomButton
                  key={i}
                  link={b.link}
                  label={b.label}
                  className="w-fit"
                  variant={i % 2 === 0 ? "secondary" : "primary"}
                  icon={b?.icon}
                  data-aos="zoom-in-sm"
                  data-aos-delay={80 + i * 20}
                />
              ),
          )}
        </div>
      </div>

      <div className="absolute z-30 bottom-1 left-0 w-full">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center lg:justify-start justify-center gap-14 py-10">
            {hero.reviews.map((r: { company_logo: string; rating: number; name: string }, i: number) => (
              <div data-aos="fade-left-sm" data-aos-delay={80 + i * 50} key={i}>
                <ImageFallback
                  src={r.company_logo}
                  alt={r.name}
                  width={185}
                  height={52}
                  className="pb-5"
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 50}
                />
                <div
                  className="flex justify-center items-center gap-x-2"
                  data-aos="fade-up-sm"
                  data-aos-delay={120 + i * 50}
                >
                  <span className="text-base font-medium text-center">
                    {r.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 w-full lg:w-4/6 xl:w-1/2 min-h-[330px] md:min-h-[200px] bg-body z-20"></div>
      <div
        className="absolute inset-0 w-[78%] h-full z-10 bg-gradient-to-r from-[#c1dce2] via-[#a6c9d3] to-transparent"
        data-aos="fade-right-sm"
      ></div>
    </section>
  );
};

export default Hero;
