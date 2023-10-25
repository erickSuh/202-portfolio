import styles from '../styles/layout.module.scss';
import eks from '../styles/eks.module.scss';
import Link from 'next/link';
import Header from './Header';

export const siteTitle = 'Érick Kenji Sugahara';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Header />
      <div className={`${styles.container}  ${eks.fadeIn}`}>
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Learn how to build a personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="google-site-verification"
            content="_-_hPcrlMzsjEjZzrD5tJfgy_fG6h0VO9UniWK-nW5Q"
          />
        </Head> */}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Voltar</Link>
          </div>
        )}
      </div>
    </>
  );
}
