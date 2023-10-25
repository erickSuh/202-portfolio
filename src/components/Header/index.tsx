import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.scss';
import eks from '../../styles/eks.module.scss';

const Header: React.FC = () => {
  return (
    <header className={eks.header}>
      <Link className={styles.headerLogo} href="/">
        HOME
      </Link>
    </header>
  );
};

export default Header;
