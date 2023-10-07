// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nirmala Rao Dhanawada</title>
      </Head>
      <Header />
      {/* page-content */}
      <Footer/>
    </div>
  );
}
