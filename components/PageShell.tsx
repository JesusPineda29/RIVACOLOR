import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import styles from './PageShell.module.css';

type PageShellProps = {
  title: string;
  text?: string;
};

/** Navbar + footer with an empty body, for sections that are not built yet. */
export default function PageShell({ title, text = 'Estamos preparando esta sección.' }: PageShellProps) {
  return (
    <main>
      <TopBar />
      <Header />
      <section className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </section>
      <Footer />
    </main>
  );
}
