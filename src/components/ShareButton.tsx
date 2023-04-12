import { Result } from "@/lib/calculator";
import { stripIdents } from "@/lib/text";

type Props = {
  className: string;
  results: Result;
}

export default function ShareButton({ className, results }: Props) {
  if (!navigator.canShare()) return <></>;

  const handleClick = () => {
    navigator.share({
      url: "https://amorometro.pages.dev",
      text: stripIdents(`
        Según amorometro, la compatibilidad entre ${results.first} 
        e ${results.second} es del ${results.chance}%. 
        ¡Ven y descubre lo compatible que eres con tu crush!
      `)
    });
  }

  return (
    <button className={className} onClick={handleClick}>
      Compartir
    </button>
  );
}
