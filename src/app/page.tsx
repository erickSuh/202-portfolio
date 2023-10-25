// import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Date from '../components/date';
import { getAllPostsSortedData } from '../lib/posts';
import eks from '../styles/eks.module.scss';
import { getAllDevtoolsData } from '../lib/devTools';

export default function Home() {
  const allPostsData = getAllPostsSortedData();
  const allDevToolsData = getAllDevtoolsData();

  return (
    <Layout home>
      <section className={`${eks.headingMd} ${eks.fadeIn}`}>
        <h1>Welcome to my developer space</h1>
        <p>
          (This website is developed in{' '}
          <a href="https://nextjs.org/">Next.js</a>.)
        </p>
      </section>
      <section className={`${eks.headingMd} ${eks.padding1px} ${eks.fadeIn}`}>
        <h2 className={eks.headingLg}>
          <Link href="/about" as={`/about`}>
            About Me
          </Link>
        </h2>
      </section>
      <section className={`${eks.headingMd} ${eks.padding1px} ${eks.fadeIn}`}>
        <h2 className={eks.headingLg}>Devtools</h2>
        <ul className={eks.list}>
          {allDevToolsData.map((devTool) => {
            return (
              <li key={devTool.id} className={eks.listItem}>
                <Link
                  href={`/devTools/${devTool.id}`}
                  as={`/devTools/${devTool.id}`}
                >
                  {devTool.title}
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
                {title}
              </Link>
              <br />
              <small className={eks.lightText}>
                <Date dateString={date} />
                {` - by: ${author}${
                  categories ? ` - categories: ${categories}` : ''
                }`}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
