import { ReactNode } from 'react';
import styles from '../styles/SiteBody.module.css';

interface Props {
    children: ReactNode;
}

export default function SiteBody({ children }: Props) {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <span>Amorometro</span>
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
