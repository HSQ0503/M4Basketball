import { getListPage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import AboutSection from "@/partials/AboutSection";
import BlogSection from "@/partials/BlogSection";
import CallToAction from "@/partials/CallToAction";
import CustomerSection from "@/partials/CustomerSection";
import Hero from "@/partials/Hero";
import Responsibility from "@/partials/Responsibility";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";
import Testimonials from "@/partials/Testimonials";

const Home = async () => {
  const locale = await getLocale();
  const { testimonial, hero, about } = getListPage("homepage/-index.md", locale).frontmatter;

  return (
    <>
      <SeoMeta />
      <Hero hero={hero} />
      <AboutSection about={about} />
      <ServiceSection locale={locale} />
      <Responsibility locale={locale} />
      <CustomerSection locale={locale} />
      {testimonial.enable && (
        <hr className="border-t border-border" data-aos="fade-up-sm" />
      )}

      <Testimonials data={testimonial} />
      <BlogSection locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
};

export default Home;
