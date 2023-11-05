import React from 'react'
import { PageContextProvider, usePageContext } from './usePageContext'
import type { PageContext } from './types'
import '../styles/index.scss';
import { Header } from './Header'
import { Footer } from './Footer'
import { useScrollToTop } from './utils'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Wrapper>{children}</Wrapper>
      </PageContextProvider>
    </React.StrictMode>
  )
}

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  const pageContext = usePageContext()

  return (<>
      <Header isIndex={pageContext.urlPathname === '/'}/>
      <main>
        {children}
      </main>
      <Footer />
  </>);
}
