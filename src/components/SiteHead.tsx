import Head from 'next/head';

interface Props {
    title: string;
}

export default function SiteHead({ title }: Props) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Descubre la verdadera compatibilidad con tu pareja con nuestro Amorómetro basado en numerología. ¡Obtén resultados precisos y confiables en segundos!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
