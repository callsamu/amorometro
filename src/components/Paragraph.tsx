import { ReactNode } from 'react';
import styles from "../styles/Paragraph.module.css";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Paragraph({ className, children }: Props) {
    return (
        <p className={`${styles.paragraph} ${className}`}>
            {children}
        </p>
    );
}
