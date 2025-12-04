import Layout from '../../../components/layout';
import { getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Date from '../../../components/date';
import eks from '../../../styles/eks.module.scss';

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id as string);

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
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml as string }}
        />
      </article>
    </Layout>
  );
}
