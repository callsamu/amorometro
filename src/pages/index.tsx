import SiteHead from '../components/SiteHead';
import SiteBody from '../components/SiteBody';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <SiteHead title="Amorometro" />
      <SiteBody>
        <h1 className={styles.title}> La Mejor Calculadora de Amor </h1>
        <form className={styles.form}>
          <input type="text" />
          <input type="text" />
          <input type="submit" value="Calcular Amor"/>
        </form>
        <p className={styles.paragraph}>Lorem ipsum dolor
        lorem ipsum dolor lorem ipsum
        ewoqiejiojweiojqiowejioqjweio
        eqwjeoiqwe eqiwoejqiwoe ewqioejq
        e qweioqwjeio wqeioqjweoiq eqwneqe
          qwer oiqoo qweriq ep pq</p>
      </SiteBody>
    </>
  );
}
