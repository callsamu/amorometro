import { Result } from "@/lib/calculator";
import { stripIdents } from "@/lib/text";
import { useEffect, useState } from "react";

type Handler = () => void;

type Props = {
  className: string;
  results: Result;
}

export default function ShareButton({ className, results }: Props) {
  let [canShare, setCanShare] = useState(false);
  let [handleClick, setHandleClick] = useState<Handler>(() => {});

  useEffect(() => {
     const shareData = {
        url: window.location.href,
        text: stripIdents(`
          Según amorometro, la compatibilidad entre ${results.first} 
          e ${results.second} es del ${results.chance}%. 
          ¡Ven y descubre lo compatible que eres con tu crush!
        `)
      };

    if (navigator.share && navigator.canShare()) {
      setHandleClick(() => navigator.share(shareData));
      setCanShare(true);
    }
  });

  if (canShare) {
    return <button className={className} onClick={handleClick}> Compartir </button>;
  }

  return <></>;
}
