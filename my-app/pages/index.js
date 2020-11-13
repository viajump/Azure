import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://viajump.com">ViaJump</a>
        </h1>

        <p className={styles.description}>
          Get started by playing with{' '}
          <code className={styles.code}>code</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Mastering &rarr;</h3>
            <p>Deploy your project.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Securing &rarr;</h3>
            <p>Apply best practice.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Developing &rarr;</h3>
            <p>Chooes your language.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Beginning &rarr;</h3>
            <p>
              Setup your enviroment.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
