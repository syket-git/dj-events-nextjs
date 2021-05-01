import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Evens | Find the hottest parties',
  description: 'Find the latest dj program and other popular parties',
  keywords: 'dj, events, dj-events, party, dj-party',
};
