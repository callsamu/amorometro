import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function SiteBody({ children }: Props) {
    return (
        <>
            <header>
                <span>Amorometro</span>
            </header>
            <div>
                <main>
                    { children }
                </main>
            </div>
        </>
    )
}
