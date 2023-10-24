import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import eks from '../../../styles/eks.module.scss';
import Layout from '../../../components/layout';

export default function DateConverter(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Conversor de data</title>
        <p>Érick Kenji Sugahara</p>
      </Head>
      <article>
        <h1 className={eks.headingXl}>Date Converter</h1>
        <div className={eks.lightText}>
          {/* <Date dateString={postData.date} /> */}
          {/* <span>{` - by: ${postData.author}`}</span> */}
          {/* {postData.categories && <span>{` -  ${postData.categories}`}</span>} */}
        </div>
        <div>Conversor de data</div>
      </article>
    </Layout>
  );
}
