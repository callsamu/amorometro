import styles from '../styles/Form.module.css';
import React from 'react';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      first: { value: string };
      second: { value: string };

    };
    router.push({
      pathname: '/amor',
      query: {
        first: target.first.value,
        second: target.second.value
      }
    });
  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputFlex}>
        <div className={styles.labelFlex}>
          <label className={styles.label} htmlFor="first">Tu Nombre</label>
          <input className={styles.inputText} type="text" placeholder="Maria" name="first" id="first"/>
        </div>
        <div className={styles.labelFlex}>
          <label className={styles.label} htmlFor="second">Nombre de tu Puta Madre</label>
          <input className={styles.inputText} type="text" placeholder="Juan" name="second" id="second"/>
        </div>
      </div>
      <input className={styles.submit} type="submit" value="Calcular Amor"/>
    </form>
  );
}
