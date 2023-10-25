'use client';

import Head from 'next/head';
import eks from '../../../styles/eks.module.scss';
import Layout from '../../../components/layout';
import { ChangeEvent, useState } from 'react';
import { copyToClipboard, generateRandomCPF } from '../../../lib/utils';

export default function CpfGenerator(): JSX.Element {
  const [cpf, setCpf] = useState(generateRandomCPF(true));
  const [makeCopy, setMakeCopy] = useState(true);
  const [formatted, setFormatted] = useState(true);

  const onCopy = () => {
    copyToClipboard(cpf);
  };

  const generateCpf = () => {
    const newCPF = generateRandomCPF(formatted);
    setCpf(newCPF);
    if (makeCopy) {
      copyToClipboard(newCPF);
    }
  };

  const onToggleMakeCopy = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeCopy(e.target.checked);
  };

  const onToggleFormat = (e: ChangeEvent<HTMLInputElement>) => {
    setFormatted(e.target.checked);
  };

  return (
    <Layout>
      <Head>
        <title>CPF Generator</title>
      </Head>
      <section>
        <h1 className={eks.headingXl}>CPF Generator</h1>
        <div className={eks.lightText}>
          <input readOnly value={cpf} disabled></input>
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
        <div className={eks.lightText}>
          <input
            id="inp-formatted"
            type="checkbox"
            checked={formatted}
            onChange={onToggleFormat}
          ></input>
          <label htmlFor="inp-formatted">Formatted</label>
        </div>
      </section>
    </Layout>
  );
}
