// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
<div className="main-content" style={styles.container}>
        <Head>
        <title>Nirmala Rao Dhanawada</title>
        <meta name="description" content="Just another human on this vast planet tinkering with tech." />
      </Head>
      <Header />

      <main style={styles.mainContent}>
        <h1 style={styles.title}>🌍 Hey there! I'm just your average Joe living on this great big planet we call Earth.</h1>
        <p style={styles.description}>
          🔧 I tinker with tech, not because I'm Tony Stark, but because:
        </p>
        <ul style={styles.list}>
          <li>1. It's fun! 🎉</li>
          <li>2. It keeps my fridge stocked. 🍕</li>
        </ul>

        <div style={styles.newsletter}>
          <h2>💌 Newsletter Signup (Yes, you read that right)</h2>
          <p>Want to subscribe to my "weekly" newsletter?</p>
          <p>Every week, I promise not to flood your inbox. In fact, I won't send anything at all.</p>
          <p>Drop your email below, for the sheer joy of it.</p>
          <input type="email" placeholder="Your email" style={styles.input} />
          <button style={styles.button}>Subscribe</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Noto Sans NKo Unjoined', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    //backgroundColor: '#f4f4f4',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2em',
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  newsletter: {
    marginTop: '40px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #7F8C8D',
    width: '300px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#7F8C8D',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#555',
    },
  },
};