import CustomHeading from "@/components/CustomHeading";
import ImageGallery from "@/components/ImageGallery";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const GalleryPage = () => {
  const { title, subtitle, images, description, meta_title } =
    getListPage("gallery/-index.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        description={description}
        meta_title={meta_title}
        image={images.length > 0 ? images[0]?.image : ""}
      />
      <section className="section mt-24 sm:mt-20">
        <div className="container relative gallery">
          <div className="mb-16">
            {subtitle && (
              <p
                dangerouslySetInnerHTML={markdownify(subtitle)}
                className="text-center text-primary text-base mb-6"
                data-aos="fade-up-sm"
              />
            )}
            {title && (
              <CustomHeading
                as="h1"
                text={title}
                className="text-center text-h2 md:text-h1"
                dataAos="fade-up-sm"
                dataAosDelay="50"
              />
            )}
          </div>

          <div data-aos="fade-up-sm" data-aos-delay="150">
            <ImageGallery images={images} />
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default GalleryPage;
