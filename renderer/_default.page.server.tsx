export { render }
export const passToClient = ['pageProps', 'urlPathname', 'routeParams']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Sudo Studio'
  const desc = (documentProps && documentProps.description) || 'Witaj w Sudo - Twoim partnerze w cyfrowej przyszłości!'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="preload"
          type="application/javascript"
          href="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"
          as="script"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta
          name="description"
          content="${desc}"
        />
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js" defer></script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
    }
  }
}
