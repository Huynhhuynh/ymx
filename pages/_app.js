import '../styles/globals.scss'
import { AppWrapper } from '../context/state'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <AppWrapper>
      <div id="page">
        <Header />
          <main id="content">
            <Component {...pageProps} />
          </main>
        <Footer />
      </div>
    </AppWrapper>
  </>
}

export default MyApp
