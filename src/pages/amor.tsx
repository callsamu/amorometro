import SiteBody from "@/components/SiteBody";
import SiteHead from "@/components/SiteHead";
import { NextRouter, useRouter } from "next/router";
import { computeChance } from "@/lib/calculator";
import Paragraph from "@/components/Paragraph";
import getResultTexts from "@/lib/text";
import Link from "next/link";

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
        <h1>Hello World: {first} + {second} = {chance} </h1>
        <Paragraph> {getResultTexts({first: first, second: second, chance: chance})} </Paragraph>
        <button><Link href="/">return</Link></button>
      </SiteBody>
    </>
  );
}
