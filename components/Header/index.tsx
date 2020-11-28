import React from 'react'
import Link from 'next/link'
import styles from '../../styles/layout.module.scss'
import eks from '../../styles/eks.module.scss'

const Header: React.FC = () => {
  return (
    <header className={eks.header}>
      <Link href="/">
        <a href="/" className={styles.headerLogo}>
          HOME
        </a>
      </Link>
    </header>
  )
}

export default Header
