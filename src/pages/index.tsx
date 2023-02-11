import SiteHead from '../components/SiteHead.tsx';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <SiteHead title="Amorometro" />
      <>
      <main className={styles.main}>
        <h1> Hello World </h1>
      </main>
    </>
  )
}
