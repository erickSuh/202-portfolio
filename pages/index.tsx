/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getAllPostsSortedData } from '../lib/posts'
import eks from '../styles/eks.module.scss'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    author: string
    categories: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${eks.headingMd} ${eks.fadeIn}`}>
        <h1>Welcome to my blog</h1>
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
        <h2 className={eks.headingLg}>Devtools</h2>
        <ul className={eks.list}>
          <li className={eks.listItem}>
            <Link href="/devTools/dateConverter" as={`/devTools/dateConverter`}>
              <a href={`/devTools/dateConverter`}>Date Converter</a>
            </Link>
            <br />
          </li>
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllPostsSortedData()
  return {
    props: {
      allPostsData,
    },
  }
}
