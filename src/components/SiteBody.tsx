import { ReactNode } from 'react';
import styles from '../styles/SiteBody.module.css';
import Image from 'next/image';
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
                        <Image src="/logo.webp" alt="amorometro" width={250} height={200}/>
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
