/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getAllPostsSortedData } from '../lib/posts';
import eks from '../styles/eks.module.scss';
import { getAllDevtoolsData } from '../lib/devTools';
import { Post } from '../lib/models';

export default function Home({
  allPostsData,
  allDevToolsData,
}: {
  allPostsData: Post[];
  allDevToolsData: { id: string; title: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${eks.headingMd} ${eks.fadeIn}`}>
        <h1>Welcome to my developer space</h1>
        <div className={eks.profilePic}>
          <img
            className={eks.profilePic}
            alt="profile Érick Kenji Sugahara"
            src="/images/profile.jpg"
          />
        </div>
        <p>
          (This website is developed in <a href="https://nextjs.org/">Next.js</a>.)
        </p>
      </section>
      <section className={`${eks.headingMd} ${eks.padding1px} ${eks.fadeIn}`}>
        <h2 className={eks.headingLg}>
          <Link href="/about" as={`/about`}>
            <a href={`/about`}>About Me</a>
          </Link>
        </h2>
      </section>
      <section className={`${eks.headingMd} ${eks.padding1px} ${eks.fadeIn}`}>
        <h2 className={eks.headingLg}>Devtools</h2>
        <ul className={eks.list}>
          {allDevToolsData.map((devTool) => {
            return (
              <li key={devTool.id} className={eks.listItem}>
                <Link href={`/devTools/${devTool.id}`} as={`/devTools/${devTool.id}`}>
                  <a href={`/devTools/${devTool.id}`}>{devTool.title}</a>
                </Link>
                <br />
              </li>
            );
          })}
        </ul>
      </section>
      <section className={`${eks.headingMd} ${eks.padding1px} ${eks.fadeIn}`}>
        <h2 className={eks.headingLg}>Latests posts</h2>
        <ul className={eks.list}>
          {allPostsData.map(({ id, date, title, author, categories }) => (
            <li className={eks.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a href={`/posts/${id}`}>{title}</a>
              </Link>
              <br />
              <small className={eks.lightText}>
                <Date dateString={date} />
                {` - by: ${author}${categories ? ` - categories: ${categories}` : ''}`}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllPostsSortedData();
  const allDevToolsData = getAllDevtoolsData();
  return {
    props: {
      allPostsData,
      allDevToolsData,
    },
  };
};
