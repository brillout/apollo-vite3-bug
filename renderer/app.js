import { createSSRApp, h, provide } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
export { createApp }
import pkg from '@vue/apollo-composable'
const { DefaultApolloClient } = pkg

function createApp(pageContext, apolloClient) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    setup() {
      provide(DefaultApolloClient, apolloClient)
    },
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(PageWithLayout)

  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
