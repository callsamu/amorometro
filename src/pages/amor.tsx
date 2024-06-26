import SiteBody from "@/components/SiteBody";
import SiteHead from "@/components/SiteHead";
import { NextRouter, useRouter } from "next/router";
import { computeChance } from "@/lib/calculator";
import Paragraph from "@/components/Paragraph";
import Counter from "@/components/Counter";
import getResultTexts from "@/lib/text";
import styles from "@/styles/Amor.module.css";
import ShareButton from "@/components/ShareButton";
import { useEffect, useRef, useState } from "react";

enum Order {
  First,
  Second
}

function getName(router: NextRouter, order: Order): string {
  const name = order === Order.First ? 
    router.query["first"] : Order.Second ? 
    router.query["second"] : "";

  if (Array.isArray(name)) {
    return name.join(" ").trim().toLocaleLowerCase();
  } else if (typeof name === "string") {
    return name.trim().toLocaleLowerCase();
  } else {
    return "";
  }
}

// Hardcoded
const padding = 15 * 2;

export default function Amor() {
  const router = useRouter()

  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const resultDisplay = useRef<HTMLDivElement>(null);
  const resultDisplayEnd = useRef<HTMLDivElement>(null);


  const result = computeChance(
    getName(router, Order.First), 
    getName(router, Order.Second)
  );

  const handleClick = () => router.push("/")

  useEffect(() => {
    if (!resultDisplay.current) return;

    setHeight(resultDisplay.current.offsetHeight + padding);

    setTimeout(() => { 
      setIsVisible(true);
      setTimeout(() => setHeight(0), 3000)
    }, 4500);
  }, []);

  useEffect(() => {
    if (!resultDisplay.current || !resultDisplayEnd.current) return;

    if (isVisible && height !== 0) {
      const displayHeight = resultDisplay.current.offsetHeight;
      const displayEndHeight = resultDisplayEnd.current.offsetHeight;

      setHeight(displayHeight + displayEndHeight + padding);
    }
  }, [isVisible, height]);

  return (
    <>
      <SiteHead title={`${result.first} + ${result.second} | Amorometro`}/>
      <SiteBody style={{ 
        height: height === 0 ? "auto" : height, 
        transition: !isVisible ? "none" : "height 2s",
      }}>
        <div ref={resultDisplay}>
          <h1>{result.first} + {result.second} </h1>
          <div className={styles.heartContainer}>
            <img src="/heart.webp" width="200" height="200" alt="heart" />
            <h2 className={styles.counter}>
              <Counter ceiling={result.chance} duration={5000} />%
            </h2>
          </div>
        </div>
        <div ref={resultDisplayEnd} style={{ display: !isVisible ? "none" : "block" }}>
          <Paragraph className={styles.text}> {getResultTexts(result)} </Paragraph>
          <button onClick={handleClick} className={styles.button}>Regressar</button>
          <ShareButton results={result} className={styles.button} />
        </div>
     </SiteBody>
    </>
  );
}
