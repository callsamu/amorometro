import { CSSProperties, ReactNode } from 'react';
import styles from '../styles/SiteBody.module.css';
import SiteParticles from './SiteParticles';
import Link from 'next/link';

interface Props {
    style?: CSSProperties;
    children?: ReactNode;
    className?: string | undefined;
}

export default function SiteBody({ style, children, className }: Props) {
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
            <main style={style} className={`${styles.main} ${className}`}>
                { children }
            </main>
        </>
    )
}
