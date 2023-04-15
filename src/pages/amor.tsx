import SiteBody from "@/components/SiteBody";
import SiteHead from "@/components/SiteHead";
import { NextRouter, useRouter } from "next/router";
import { computeChance } from "@/lib/calculator";
import Paragraph from "@/components/Paragraph";
import Counter from "@/components/Counter";
import getResultTexts from "@/lib/text";
import Image from "next/image";
import styles from "@/styles/Amor.module.css";
import ShareButton from "@/components/ShareButton";

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

export default function Amor() {
  const router = useRouter()

  const result = computeChance(
    getName(router, Order.First), 
    getName(router, Order.Second)
  );

  const handleClick = () => router.push("/")

  return (
    <>
      <SiteHead title={`${result.first} + ${result.second} | Amorometro`}/>
      <SiteBody>
        <h1>{result.first} + {result.second} </h1>
        <div className={styles.heartContainer}>
          <Image src="/heart.webp" width={200} height={200} alt="heart" />
          <h2 className={styles.counter}>
            <Counter ceiling={result.chance} duration={5000} />%
          </h2>
        </div>
        <Paragraph className={styles.text}> {getResultTexts(result)} </Paragraph>
        <button onClick={handleClick} className={styles.button}>Regressar</button>
        <ShareButton results={result} className={styles.button} />
      </SiteBody>
    </>
  );
}
