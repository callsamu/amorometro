import SiteBody from "@/components/SiteBody";
import SiteHead from "@/components/SiteHead";
import { NextRouter, useRouter } from "next/router";
import { computeChance } from "@/lib/calculator";
import Paragraph from "@/components/Paragraph";
import Counter from "@/components/Counter";
import getResultTexts from "@/lib/text";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <>
      <SiteHead title="amor"/>
      <SiteBody>
        <h1>Hello World: {first} + {second} </h1>
        <Image src={"/heart.svg"} width={200} height={200} alt="heart" />
        <Counter ceiling={chance} duration={10000} /> {chance}
        <Paragraph> {getResultTexts({first: first, second: second, chance: chance})} </Paragraph>
        <Link href="/"><button>return</button></Link>
      </SiteBody>
    </>
  );
}
