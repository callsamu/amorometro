import { stripIdents } from '@/lib/text';
import Head from 'next/head';

interface Props {
    title: string;
}


export default function SiteHead({ title }: Props) {
  const description = stripIdents(`
    Descubre la verdadera compatibilidad con 
    tu pareja con nuestro Amorómetro basado en numerología. 
    ¡Obtén resultados precisos y confiables en segundos!
  `);

  const url = "https://amorometro.com";

    return (
        <Head>
            <title>{title}</title>

            <meta property="og:title" content="Amorometro" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}/open-graph-image.png`} />
            <meta property="og:url" content={url} />

            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png" />
            <meta name="theme-color" content="#fefefe" />

            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
