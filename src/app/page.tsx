import { getListPage } from "@/lib/contentParser";
import AboutSection from "@/partials/AboutSection";
import BlogSection from "@/partials/BlogSection";
import CallToAction from "@/partials/CallToAction";
import CustomerSection from "@/partials/CustomerSection";
import Hero from "@/partials/Hero";
import Responsibility from "@/partials/Responsibility";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";
import Testimonials from "@/partials/Testimonials";

const Home = () => {
  const { testimonial } = getListPage("homepage/-index.md").frontmatter;

  return (
    <>
      <SeoMeta />
      <Hero />
      <ServiceSection />
      <AboutSection />
      <Responsibility />
      <CustomerSection />
      {testimonial.enable && (
        <hr className="border-t border-border" data-aos="fade-up-sm" />
      )}

      <Testimonials data={testimonial} />
      <BlogSection />
      <CallToAction />
    </>
  );
};

export default Home;
