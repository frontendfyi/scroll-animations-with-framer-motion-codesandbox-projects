import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-background">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
