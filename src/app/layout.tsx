import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/lib/getLocale";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import "aos/dist/aos.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: config.site.title,
  description: config.metadata.meta_description,
  authors: [{ name: config.metadata.meta_author }],
  openGraph: {
    title: config.site.title,
    description: config.metadata.meta_description,
    url: config.site.base_url,
    siteName: config.site.title,
    images: [
      {
        url: `${config.site.base_url}${config.metadata.meta_image}`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.metadata.meta_description,
    images: [`${config.site.base_url}${config.metadata.meta_image}`],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  // import google font css
  const pf = theme.fonts.font_family.primary;

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      {/* google tag manager */}
      {config.google_tag_manager.enable && (
        <GoogleTagManager gtmId={config.google_tag_manager.gtm_id} />
      )}

      {/* head */}
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="m4-basketball" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}&display=swap`}
          rel="stylesheet"
        />
      </head>

      {/* body */}
      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Header dict={dict} />
          <main>{children}</main>
          <Footer dict={dict} />
        </Providers>
      </body>
    </html>
  );
}
