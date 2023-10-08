// pages/_app.js

import PageTransition from '../components/PageTransition';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="global-container">
      <PageTransition>
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </div>
  );
}

export default MyApp;
