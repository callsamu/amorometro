import { Result } from "./calculator";

export function stripIdents(str: string): string {
  return str.split('\n').map(str => str.trim()).join(' ');
}

const templates = [
  (r: Result) => stripIdents(`Según nuestro Amorómetro, ${r.first} y 
    ${r.second} tienen una compatibilidad del ${r.chance}%. 
    Este resultado sugiere que hay una falta de armonía y conexión en 
    su relación en este momento. Es importante que ambos reflexionen sobre 
    sus sentimientos y metas en la relación y determinen si están dispuestos 
    a trabajar juntos para mejorarla. Si bien no es imposible superar los 
    desafíos, se requerirá un esfuerzo significativo y compromiso de ambas partes. 
    Les deseamos lo mejor.
  `),
  (r: Result) => stripIdents(`Según nuestro Amorómetro, ${r.first} y 
    ${r.second} tienen una compatibilidad del ${r.chance}%. 
    Este resultado sugiere que hay algunos obstáculos significativos 
    en su relación que deben ser abordados antes de que puedan avanzar 
    juntos. Es importante que ambos trabajen juntos para superar estos 
    desafíos y fortalecer su vínculo. Con paciencia y compromiso, su 
    relación puede mejorar, pero requerirá un trabajo arduo y honestidad 
    mutua. ¡Buena suerte!
  `),
  (r: Result) => stripIdents(`Según nuestro Amorómetro, ${r.first} y
    ${r.second} tienen una compatibilidad del ${r.chance}%. 
    Este resultado sugiere que hay ciertas diferencias y desafíos en 
    su relación que pueden requerir un trabajo adicional para superar. 
    Es importante que ambos se comuniquen abiertamente y trabajen juntos 
    para resolver cualquier problema. Con paciencia y esfuerzo, su relación 
    puede mejorar y crecer más fuerte. ¡Buena suerte!`
  ),
  (r: Result) => stripIdents(`
    Según nuestro Amorómetro, ${r.first} y ${r.second} tienen una 
    compatibilidad del ${r.chance}%. Este es un resultado 
    prometedor y sugiere una relación amorosa positiva, pero también 
    requiere trabajo y compromiso de ambas partes. Hay una base sólida 
    para el amor, pero es importante seguir fortaleciéndola a través de 
    la comunicación abierta y la resolución de conflictos juntos. Con un 
    poco de esfuerzo, su relación puede prosperar y convertirse en algo 
    duradero y satisfactorio. ¡Buena suerte!
  `),
  (r: Result) => stripIdents(`
    ¡Felicidades ${r.first} y ${r.second}! Según nuestro Amorómetro, su 
    compatibilidad es del ${r.chance}. Este es un resultado 
    impresionante y sugiere una relación amorosa sólida y satisfactoria. 
    Parece que ambos tienen una conexión fuerte y una química natural. 
    Aprovechen al máximo este amor y construyan juntos un futuro lleno 
    de amor y felicidad. ¡Buena suerte!
  `)
];

export default function getResultTexts(results: Result): string {
  if (results.chance < 0 || results.chance > 100) return "";
  const idx = Math.floor(results.chance / (100 / templates.length));
  return templates[idx](results);
}

