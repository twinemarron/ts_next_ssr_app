import { Provider } from 'react-redux'
import App, { AppProps, AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, ReduxStoreInstance } from '../store'

type Props = {
  store: ReduxStoreInstance
}

export default withRedux(initStore)(
  class extends App<Props> {
    static async getInitialProps({ Component, ctx }: AppContext) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)

// import { Provider } from 'react-redux'
// import App, { AppProps, AppContext } from 'next/app'
// import withRedux from 'next-redux-wrapper'
// import { initStore } from '../store'
//
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
//
// // Only uncomment this method if you have blocking data requirements for
// // every single page in your application. This disables the ability to
// // perform automatic static optimization, causing every page in your app to
// // be server-side rendered.
// //
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//
//   return { ...appProps }
// }
//
// export default MyApp
