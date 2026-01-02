import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import ProcessSection from "@/partials/ProcessSection";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";

const Services = () => {
  const { title, meta_title, description, image } =
    getListPage("services/-index.md").frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <ServiceSection hero />
      <ProcessSection />
      <CallToAction />
    </>
  );
};

export default Services;
