/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import eks from '../../styles/eks.module.scss';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    author: string;
    categories: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <p>{postData.author}</p>
      </Head>
      <article>
        <h1 className={eks.headingXl}>{postData.title}</h1>
        <div className={eks.lightText}>
          <Date dateString={postData.date} />
          <span>{` - by: ${postData.author}`}</span>
          {postData.categories && <span>{` -  ${postData.categories}`}</span>}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
