// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
<header className="header" style={styles.header}>
          <nav style={styles.nav}>
          <Link href="/">Home</Link>
          <a href="#" style={styles.link}>Projects</a>
          <Link href="/license">License</Link>
        </nav>
      </header>
    );
  }
  
  const styles = {
    header: {
      //width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#FFFFFF',
      borderBottom: '2px solid #7F8C8D',
      fontFamily: "'Noto Sans NKo Unjoined', sans-serif",
      marginBottom: '20px',
    },
    nav: {
      display: 'flex',
      gap: '40px',
    },
    link: {
      textDecoration: 'none',
      color: '#000000',
      fontSize: '1.1em',
      fontWeight: '400',
      transition: 'color 0.3s',
      '&:hover': {
        color: '#7F8C8D',
      },
    },
  };
  