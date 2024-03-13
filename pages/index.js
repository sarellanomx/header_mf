import styles from '../styles/Home.module.css'
import Header from '../src/component/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
      </main>
    </div>
  )
}