import Head from 'next/head';

interface Props {
    title: string;
}


export default function SiteHead({ title }: Props) {
  const description = "Descubre la verdadera compatibilidad con tu pareja con nuestro Amorómetro basado en numerología. ¡Obtén resultados precisos y confiables en segundos!";
  const url = "https://amorometro.pages.dev/";

    return (
        <Head>
            <title>{title}</title>

            <meta property="og:title" content="Amorometro" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image:secure_url" content={`${url}//open-graph-image.png`} />
            <meta property="og:url" content={url} />

            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
