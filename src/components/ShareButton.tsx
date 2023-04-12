import { Result } from "@/lib/calculator";
import { stripIdents } from "@/lib/text";
import { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";

type Handler = () => void;

type Props = {
  className: string;
  results: Result;
}

export default function ShareButton({ className, results }: Props) {
  const [url, setUrl] = useState("https://amorometro.pages.dev/");

  const description = stripIdents(`        
    Según amorometro, la compatibilidad entre ${results.first} 
    e ${results.second} es del ${results.chance}%. 
    ¡Ven y descubre lo compatible que eres con tu crush!
  `);

  useEffect(() => setUrl(window.location.href), []);

  const data = {
    url: url,
    text: description,
  };

  return (
    <RWebShare data={data}>
      <button className={className}> Compartir </button>
    </RWebShare>
  );
}
