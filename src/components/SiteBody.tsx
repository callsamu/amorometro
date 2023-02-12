import { ReactNode } from 'react';
import styles from '../styles/SiteBody.module.css';
import Image from 'next/image';

interface Props {
    children: ReactNode;
}

export default function SiteBody({ children }: Props) {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Image
                     src="/amorometro.svg"
                     alt="amorometro"
                     width={190}
                     height={200}/>
                    <span> Sobre </span>
                </nav>
            </header>
            <div className={styles.mainContainer}>
                <main className={styles.main}>
                    { children }
                </main>
            </div>
        </>
    )
}
