"use client"

import Head from 'next/head';
import eks from '../../../styles/eks.module.scss';
import Layout from '../../../components/layout';
import { ChangeEvent, useState } from 'react';
import { copyToClipboard } from '../../../lib/utils';
import { generateRandomName } from '../../../lib/utils';

export default function NameGenerator(): JSX.Element {
  const [name, setName] = useState(generateRandomName());
  const [makeCopy, setMakeCopy] = useState(true);

  const onCopy = () => {
    copyToClipboard(name);
  };

  const generateCpf = () => {
    const newName = generateRandomName();
    setName(newName);
    if (makeCopy) {
      copyToClipboard(newName);
    }
  };

  const onToggleMakeCopy = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeCopy(e.target.checked);
  };

  return (
    <Layout>
      <Head>
        <title>Name Generator</title>
      </Head>
      <section>
        <h1 className={eks.headingXl}>Name Generator</h1>
        <div className={eks.lightText}>
          <input readOnly value={name} disabled></input>
          <button onClick={generateCpf}>Generate</button>
          <button onClick={onCopy}>Copy</button>
        </div>
        <div className={eks.lightText}>
          <input
            id="inp-make-copy"
            type="checkbox"
            checked={makeCopy}
            onChange={onToggleMakeCopy}
          ></input>
          <label htmlFor="inp-make-copy">Make a copy</label>
        </div>
      </section>
    </Layout>
  );
}
