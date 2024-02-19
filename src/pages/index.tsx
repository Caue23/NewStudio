import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <header className={styles.container}>
    <div className={styles.content}>
      <h1>Studio Agbara</h1>
      <p>Despertando o poder que há em você!</p>
      <Link className={styles.button} href='/detalhes'><img src='/image/chevron-double-ring.jpeg'></img></Link>
    </div>
    </header>
      
  )
}
