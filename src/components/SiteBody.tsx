import { ReactNode } from 'react';
import styles from '../styles/SiteBody.module.css';
import SiteParticles from './SiteParticles';
import Link from 'next/link';

interface Props {
    children: ReactNode;
}

export default function SiteBody({ children }: Props) {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <img src="/logo.webp" alt="calculadora de amor" width={260} height={65}/>
                    </Link>

                </nav>
            </header>
            <SiteParticles />
            <main className={styles.main}>
                { children }
            </main>
        </>
    )
}
