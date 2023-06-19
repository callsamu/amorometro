import SiteHead from '../components/SiteHead';
import SiteBody from '../components/SiteBody';
import Paragraph from '../components/Paragraph';
import Form from '../components/Form';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const standalone = "(display-mode: standalone)";

export default function Home() {
  const [isInstalled, considerInstalled] = useState(false);

  useEffect(() => {
    if (matchMedia(standalone).matches) {
      considerInstalled(true)
    }
  }, []);

  return (
    <>
      <SiteHead title="Amorometro" />
      <SiteBody 
        className={styles.body}>
        { isInstalled ? null : <h1> La Mejor Calculadora de Amor </h1> }

        <Form />

        { isInstalled ? null :
          <>
            <Paragraph>
            ¿Estás buscando a tu amor verdadero? 
						¿Quieres saber si esa persona especial es tu pareja perfecta? 
						¡No busques más! Amorometro es la calculadora de amor que necesitas.
						</Paragraph>

            <Paragraph>
            Nuestra calculadora utiliza la antigua ciencia de la numerología
            para revelar la compatibilidad entre dos personas. Al analizar las
            energías y vibraciones de ambos nombres, Amorómetro puede brindarte
            una visión única y precisa de su relación.
            </Paragraph>

            <Paragraph>
            La numerología se basa en la idea de que los números tienen un
            significado especial y pueden revelar aspectos ocultos de nuestras vidas.
            Al calcular los valores numéricos de sus nombres, podemos determinar la
            compatibilidad y el potencial de su relación.
            </Paragraph>

            <Paragraph>
            Tenga en cuenta que Amorómetro es solo para fines de entretenimiento y
            no es un sustituto de un consejo profesional. Los resultados generados
            por nuestra calculadora deben ser utilizados como una guía y no como una
            garantía del éxito de su relación.
            </Paragraph>

            <Paragraph>
            No esperes más para descubrir si esa persona especial es tu amor verdadero. 
						¡Usa Amorometro hoy mismo y fortalece tu relación!            
						</Paragraph>
          </>
        }
      </SiteBody>
    </>
  );
}
