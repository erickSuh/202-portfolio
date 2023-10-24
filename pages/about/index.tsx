import Head from 'next/head';
import eks from '../../styles/eks.module.scss';
import Layout from '../../components/layout';

export default function About(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <article>
        <h1 className={eks.headingXl}>About Me</h1>
        <h2 className={eks.headingXl}>ME</h2>
        <p className={eks.lightText}>
          Hi, my name is Érick Kenji Sugahara I&apos;m brazilian and a mobile developer. I love
          programming, i&apos;m doing this about six years, today it&apos;s my way to earn some
          money.
        </p>
        <p className={eks.lightText}>
          My hobbies is play games, develop useless applications and hang out with my family.
        </p>
        <h2 className={eks.headingXl}>Some of my technical skills</h2>
        <ul>
          <li className={eks.lightText}>JavaScript</li>
          <li className={eks.lightText}>ReactJS</li>
          <li className={eks.lightText}>React Native</li>
          <li className={eks.lightText}>Java</li>
          <li className={eks.lightText}>Micro frontend</li>
          <li className={eks.lightText}>SSPA</li>
        </ul>
      </article>
    </Layout>
  );
}
