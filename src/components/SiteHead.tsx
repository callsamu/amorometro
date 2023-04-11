import Head from 'next/head';

interface Props {
    title: string;
}

const description = "Descubre la verdadera compatibilidad con tu pareja con nuestro Amorómetro basado en numerología. ¡Obtén resultados precisos y confiables en segundos!";

export default function SiteHead({ title }: Props) {

    return (
        <Head>
            <title>{title}</title>

            <meta name="og:title" content="Amorometro" />
            <meta name="og:type" content={description} />
            <meta name="og:image" content="/open-graph-image.png" />
            <meta name="og:url" content="https://amorometro.pages.dev/" />

            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
