import Header from '../components/Header';
import Footer from '../components/Footer';

export default function License() {
  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <h1 style={styles.title}>Acknowledgements & Licenses</h1>
        
        {tools.map((tool, index) => (
          <div key={index} style={styles.tool}>
            <a href={tool.link} style={styles.toolLink} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </a>
            <p>{tool.description}</p>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}

const tools = [
    {
      name: 'Next.js',
      link: 'https://nextjs.org/',
      description: 'The React framework for production.',
    },
    {
      name: 'Visual Studio Code',
      link: 'https://code.visualstudio.com/',
      description: 'Code editor redefined and optimized for building and debugging modern web and cloud applications.',
    },
    {
      name: 'Vi Editor',
      link: 'https://www.vim.org/',
      description: 'Highly configurable text editor built to enable efficient text editing.',
    },
    {
      name: 'SSH',
      link: 'https://www.openssh.com/',
      description: 'OpenSSH is the premier connectivity tool for remote login with the SSH protocol.',
    },
    {
      name: 'Netlify',
      link: 'https://www.netlify.com/',
      description: 'Build, deploy, and scale modern web projects.',
    },
    {
      name: 'Git',
      link: 'https://git-scm.com/',
      description: 'Distributed version control system.',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/',
      description: 'Platform for version control and collaboration.',
    },
      {
        name: 'Firefox',
        link: 'https://www.mozilla.org/en-US/firefox/',
        description: 'A free and open-source web browser developed by Mozilla.',
      },
      {
        name: 'Google Fonts - Noto Sans N\'Ko Unjoined',
        link: 'https://fonts.google.com/specimen/Noto+Sans+N%27Ko+Unjoined',
        description: 'A typeface family designed by Google to support a wide variety of scripts and languages.',
      },
      ];
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: "'Noto Sans NKo Unjoined', sans-serif",
  },
  main: {
    flex: 1,
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  tool: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #7F8C8D',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },  toolLink: {
    fontSize: '1.2em',
    textDecoration: 'none',
    color: '#000',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#7F8C8D',
    },
  },
  // ... Add other styles as needed
};
