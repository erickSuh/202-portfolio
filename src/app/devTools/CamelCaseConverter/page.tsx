'use client';

import Head from 'next/head';
import eks from '../../../styles/eks.module.scss';
import Layout from '../../../components/layout';
import { ChangeEvent, useState } from 'react';
import {
  copyToClipboard,
  convertCamelCaseToWords,
  convertWorldsToCamelCase,
} from '../../../lib/utils';

const SPLIT_ID = 'rad-split-camel-case';

export default function CamelCaseConverter() {
  const [text, setText] = useState('');
  const [resultText, setResultText] = useState('');
  const [makeCopy, setMakeCopy] = useState(true);
  const [option, setOption] = useState(SPLIT_ID);

  const onCopy = () => {
    copyToClipboard(text);
  };

  const generateConvert = () => {
    let newText = '';
    if (option === SPLIT_ID) {
      newText = convertCamelCaseToWords(text);
    } else {
      newText = convertWorldsToCamelCase(text);
    }
    setResultText(newText);
    if (makeCopy) {
      copyToClipboard(newText);
    }
  };

  const onToggleMakeCopy = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeCopy(e.target.checked);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onToggleOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.id);
  };

  return (
    <Layout>
      <Head>
        <title>CPF Generator</title>
      </Head>
      <h1 className={eks.headingXl}>Camel Case Converter</h1>
      <div className={eks.lightText}>
        <label htmlFor="inp-text">Convert text</label>
        <input id="inp-text" value={text} onChange={onChangeText}></input>
        <button onClick={generateConvert}>Convert</button>
        <button onClick={onCopy}>Copy</button>
      </div>
      <div className={eks.lightText}>
        <label htmlFor="inp-convert-result">Result text</label>
        <input
          id="inp-convert-result"
          readOnly
          value={resultText}
          disabled
        ></input>
      </div>
      <div className={eks.lightText}>
        <input
          id="chk-make-copy"
          type="checkbox"
          checked={makeCopy}
          onChange={onToggleMakeCopy}
        ></input>
        <label htmlFor="chk-make-copy">Make a copy</label>
      </div>

      <h4>Convert Options</h4>
      <div className={eks.lightText}>
        <input
          id={SPLIT_ID}
          type="radio"
          name="rad-options"
          checked={option === SPLIT_ID}
          onChange={onToggleOption}
        ></input>
        <label htmlFor={SPLIT_ID}>Split camel case</label>
      </div>
      <div className={eks.lightText}>
        <input
          id="rad-join-camel-case"
          type="radio"
          name="rad-options"
          checked={option === 'rad-join-camel-case'}
          onChange={onToggleOption}
        ></input>
        <label htmlFor="rad-join-camel-case">Join camel case</label>
      </div>
    </Layout>
  );
}
