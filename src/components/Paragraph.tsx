import { ReactNode } from 'react';
import styles from "../styles/Paragraph.module.css";

interface Props {
    children: ReactNode;
}

export default function Paragraph({ children }: Props) {
    return (
        <p className={styles.paragraph}>
            {children}
        </p>
    );
}
