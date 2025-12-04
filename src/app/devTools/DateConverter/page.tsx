'use client';

import Head from 'next/head';
import eks from '../../../styles/eks.module.scss';
import Layout from '../../../components/layout';
import { ChangeEvent, FormEvent, useState } from 'react';
import { copyToClipboard, convertDateFormat } from '../../../lib/utils';

const DATE_FORMATS = [
  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY (BR)' },
  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD (ISO)' },
  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY (US)' },
  { value: 'YYYY-MM-DD HH:mm:ss', label: 'YYYY-MM-DD HH:mm:ss' },
  { value: 'DD/MM/YYYY HH:mm:ss', label: 'DD/MM/YYYY HH:mm:ss' },
  { value: 'timestamp', label: 'Timestamp (ms)' },
  { value: 'ISO', label: 'ISO String' },
];

export default function DateConverter(): JSX.Element {
  const [inputDate, setInputDate] = useState('');
  const [fromFormat, setFromFormat] = useState('DD/MM/YYYY');
  const [toFormat, setToFormat] = useState('YYYY-MM-DD');
  const [result, setResult] = useState('');
  const [autoCopy, setAutoCopy] = useState(true);

  const handleConvert = () => {
    const converted = convertDateFormat(inputDate, fromFormat, toFormat);
    setResult(converted);
    if (autoCopy) {
      copyToClipboard(converted);
    }
  };

  const handleCopy = () => {
    copyToClipboard(result);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
    setResult('');
  };

  const handleFromFormatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFromFormat(e.target.value);
    setResult('');
  };

  const handleToFormatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setToFormat(e.target.value);
    setResult('');
  };

  const handleAutoCopyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAutoCopy(e.target.checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleConvert();
  };

  return (
    <Layout>
      <Head>
        <title>Date Converter</title>
      </Head>
      <section>
        <h1 className={eks.headingXl}>Date Converter</h1>

        <form onSubmit={handleSubmit}>
          <div className={eks.formGroup}>
            <label htmlFor="input-date">Data para converter</label>
            <input
              id="input-date"
              type="text"
              placeholder="Digite a data"
              value={inputDate}
              onChange={handleInputChange}
            />
          </div>

          <div className={eks.formGroup}>
            <label htmlFor="from-format">De</label>
            <select
              id="from-format"
              value={fromFormat}
              onChange={handleFromFormatChange}
            >
              {DATE_FORMATS.map((format) => (
                <option key={format.value} value={format.value}>
                  {format.label}
                </option>
              ))}
            </select>
          </div>

          <div className={eks.formGroup}>
            <label htmlFor="to-format">Para</label>
            <select
              id="to-format"
              value={toFormat}
              onChange={handleToFormatChange}
            >
              {DATE_FORMATS.map((format) => (
                <option key={format.value} value={format.value}>
                  {format.label}
                </option>
              ))}
            </select>
          </div>

          <div className={eks.formGroup}>
            <button type="submit">Converter</button>
          </div>

          <input
            id="auto-copy"
            type="checkbox"
            checked={autoCopy}
            onChange={handleAutoCopyChange}
          />
          <label htmlFor="auto-copy">Copiar automaticamente</label>
          {result && (
            <div className={eks.formGroup}>
              <label htmlFor="result">Resultado</label>
              <input id="result" type="text" readOnly value={result} disabled />
              <button type="button" onClick={handleCopy}>
                Copiar
              </button>
            </div>
          )}
        </form>
      </section>
    </Layout>
  );
}
