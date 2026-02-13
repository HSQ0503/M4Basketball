import { getDictionary } from "@/i18n/getDictionary";
import { getListPage } from "@/lib/contentParser";
import { getLocale } from "@/lib/getLocale";
import CallToAction from "@/partials/CallToAction";
import PricingSection from "@/partials/PricingSection";
import ProcessSection from "@/partials/ProcessSection";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";

const Services = async () => {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { title, meta_title, description, image } =
    getListPage("services/-index.md", locale).frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <ServiceSection hero locale={locale} />
      <PricingSection locale={locale} dict={dict} />
      <ProcessSection locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
};

export default Services;
