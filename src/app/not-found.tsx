import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/lib/getLocale";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const NotFound = async () => {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <SeoMeta title={dict.notFound.title} />

      <section className="section text-center" data-aos="fade-in-sm">
        <div className="container mt-24 sm:mt-20">
          <div className="row justify-center">
            <div className="col-12 md:col-8 lg:col-6" data-aos="zoom-in-sm">
              <span
                className="text-[8rem] block font-bold text-text dark:text-darkmode-text-dark"
              >
                404
              </span>
              <h1 className="h2 mb-4" data-aos="fade-up-sm">{dict.notFound.heading}</h1>
              <div className="content" data-aos="fade-up-sm">
                <p>{dict.notFound.description}</p>
              </div>
              <Link href="/" className="btn btn-primary mt-8" data-aos="fade-up-sm">
                {dict.notFound.backHome}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
