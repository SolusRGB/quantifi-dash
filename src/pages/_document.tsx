import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="twitter:image" content="/banner.gif" />
          <meta property="twitter:card" content="/banner.gif" />
          <meta
            property="twitter:title"
            content="Quantifi - AI-Powered Investing"
          />
          <meta
            property="twitter:description"
            content="Quantifi is an AI-driven platform that empowers users to make data-driven investment decisions. Explore real-time market insights and optimize your portfolio with cutting-edge technology."
          />
          <meta
            property="description"
            content="Quantifi is an AI-powered investment platform that provides real-time market insights and data-driven portfolio optimization. Leverage cutting-edge technology to make informed investment decisions and maximize your returns."
          />
          <meta property="og:image" content="/banner.gif" />
          <meta property="og:title" content="Quantifi - AI-Powered Investing" />
          <meta
            property="og:description"
            content="Quantifi is an AI-driven platform that empowers users to make data-driven investment decisions. Explore real-time market insights and optimize your portfolio with cutting-edge technology."
          />
          <meta property="og:url" content="https://example.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
