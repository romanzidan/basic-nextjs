import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

interface LayoutPage {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutPage) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          Next JS -
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Next JS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
