import * as hash from "./hash";

export interface Result {
  first: string;
  second: string;
  chance: number;
}

function capitalize(str: string): string {
  return str
    .split(" ")
    .map(word => {
      const first = word.charAt(0).toLocaleUpperCase();
      const rest = word.slice(1);
      return first + rest;
    }).join(" ");
}

export function computeChance(name1: string, name2: string): Result {
  const limit = 10_000;

  if ((name1 === "samuel" && name2 === "mikaelly") ||
	  (name1 === "mikaelly" && name2 === "samuel")) {
	return {
	  first: name1,
	  second: name2,
	  chance: 100,
	};
  }

  const m = hash.hashString(name1, limit);
  const n = hash.hashString(name2, limit);

  return {
    first: capitalize(name1),
    second: capitalize(name2),
    chance: Math.round(hash.hashNumber(m + n, limit) / 100),
  };
}


