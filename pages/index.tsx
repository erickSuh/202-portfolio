/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import eks from '../styles/eks.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
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
        <h2 className={eks.headingLg}>
          Últimos posts com text grande para caramba ate estourar essa porra
        </h2>
        <ul className={eks.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={eks.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={eks.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
