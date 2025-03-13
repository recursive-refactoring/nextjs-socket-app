import { PROJECT_DESCRIPTION, PROJECT_NAME } from "@/configs/env";
import { AppPropsWithLayout } from "@/interfaces/pages";
import RootLayout from "@/layouts/root-layout";
import "@/styles/globals.css";
import { formatPathname } from "@/utils/project-meta";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const pathname = usePathname();

  const formattedPathname = formatPathname(pathname);

  return (
    <>
      <Head>
        <title>
          {formattedPathname
            ? `${formattedPathname} - ${PROJECT_NAME}`
            : PROJECT_NAME}
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        <link rel="manifest" href="/site.webmanifest" />

        <meta name="description" content={PROJECT_DESCRIPTION} />

        <meta property="og:title" content={PROJECT_NAME} />
        <meta property="og:description" content={PROJECT_DESCRIPTION} />
        <meta property="og:image" content="/og-logo.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={PROJECT_NAME} />
        <meta name="twitter:description" content={PROJECT_DESCRIPTION} />
        <meta name="twitter:image" content="/og-logo.png" />
      </Head>
      <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
    </>
  );
}
