// components/Layout.tsx

import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/website" passHref>
            Home
          </Link>
          <Link href="/website" passHref>
            Post List
          </Link>
          {/* <Link href="/posts/[postId]" as="/posts/1" passHref>
            Single Post
          </Link> */}
          <Link href="/" passHref>
            Logout
          </Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>Contact Info</div>
        <div>Address</div>
        
          <Link href="https://www.linkedin.com/in/vishal-kamble-4016a0210/" passHref>
            <div>LinkedIn</div>
          </Link>
          <Link href="https://github.com/Vishal-002" passHref>
            <div>GitHub</div>
          </Link>
  
      </footer>
    </div>
  );
};

export default Layout;
