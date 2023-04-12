import { Result } from "@/lib/calculator";
import { stripIdents } from "@/lib/text";
import { useEffect } from "react";

type Props = {
  className: string;
  results: Result;
}

export default function ShareButton({ className, results }: Props) {
  let canShare = false;
  let handleClick = () => {};

  const shareData = {
    url: "https://amorometro.pages.dev",
    text: stripIdents(`
      Según amorometro, la compatibilidad entre ${results.first} 
      e ${results.second} es del ${results.chance}%. 
      ¡Ven y descubre lo compatible que eres con tu crush!
    `)
  };;

  useEffect(() => {
    if (navigator.share && navigator.canShare()) {
      handleClick = () => navigator.share(shareData);
      canShare = true;
    }
  }, []);

  if (canShare) {
    return <button className={className} onClick={handleClick}> Compartir </button>;
  }

  return <></>;
}
