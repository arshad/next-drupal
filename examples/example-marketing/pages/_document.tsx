import Document, { Html, Main, NextScript, Head } from "next/document"
import { InitializeColorMode } from "reflexjs"

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
