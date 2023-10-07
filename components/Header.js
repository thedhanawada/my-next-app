// components/Header.js

export default function Header() {
    return (
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>Discover Yourself</a>
          <a href="#" style={styles.link}>Projects</a>
          <a href="#" style={styles.link}>Blog</a>
          <a href="#" style={styles.link}>License</a>
        </nav>
      </header>
    );
  }
  
  const styles = {
    header: {
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderBottom: '2px solid #7F8C8D',
      fontFamily: "'Noto Sans NKo Unjoined', sans-serif",
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
  