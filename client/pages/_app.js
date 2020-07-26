import "tachyons/css/tachyons.min.css"
import buildClient from "../api/build-client"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div>
        <Component currentUser={currentUser} {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  //   const client = buildClient(appContext.ctx)
  //   const { data } = await client.get("/api/users/currentuser")
  let currentUser = { name: "shashang" }
  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      //   client,
      currentUser
    )
  }

  return {
    pageProps,
    // ...data,
  }
}

export default AppComponent
