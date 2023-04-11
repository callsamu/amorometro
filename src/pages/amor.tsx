import SiteBody from "@/components/SiteBody";
import SiteHead from "@/components/SiteHead";
import { NextRouter, useRouter } from "next/router";
import { computeChance } from "@/lib/calculator";
import Paragraph from "@/components/Paragraph";
import Counter from "@/components/Counter";
import getResultTexts from "@/lib/text";
import Image from "next/image";
import styles from "@/styles/Amor.module.css";

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

  const first = getName(router, Order.First);
  const second = getName(router, Order.Second);
  const chance = computeChance(first, second);

  const handleClick = () => router.push("/");

  return (
    <>
      <SiteHead title={`${first} + ${second} | Amorometro`}/>
      <SiteBody>
        <h1>{first} + {second} </h1>
        <div className={styles.heartContainer}>
          <Image src={"/heart.svg"} width={200} height={200} alt="heart" />
          <h2 className={styles.counter}>
            <Counter ceiling={chance} duration={5000} />%
          </h2>
        </div>
        <Paragraph className={styles.text}> {getResultTexts({first: first, second: second, chance: chance})} </Paragraph>
        <button onClick={handleClick} className={styles.button}>Regressar</button>
      </SiteBody>
    </>
  );
}
