import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>404 Not Found</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">
          <a> Go to home</a>
        </Link>
      </div>
    </Layout>
  );
}
