// pages/_app.js

import PageTransition from '../components/PageTransition';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <PageTransition>
      <Component {...pageProps} key={router.route} />
    </PageTransition>
  );
}

export default MyApp;
