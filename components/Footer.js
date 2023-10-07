// components/Footer.js

import { useState, useEffect } from 'react';

export default function Footer() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());

    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000); 

    return () => clearInterval(timer); 
  }, []);

  if (!date) return null; 

  return (
    <footer style={styles.footer}>
      <div style={styles.divider}></div>
      <div style={styles.date}>
        {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Noto Sans NKo Unjoined', sans-serif",
  },
  divider: {
    width: '80%',
    height: '2px',
    backgroundColor: '#7F8C8D',
    marginBottom: '10px',
  },
  date: {
    fontSize: '1em',
    color: '#000000',
  },
};
