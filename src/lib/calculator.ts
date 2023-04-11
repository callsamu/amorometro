import * as hash from "./hash";

export interface Result {
  first: string;
  second: string;
  chance: number;
}

export function computeChance(name1: string, name2: string): Result {
  const limit = 10_000;

  const m = hash.hashString(name1, limit);
  const n = hash.hashString(name2, limit);
  
  return {
    first: name1,
    second: name2,
    chance: hash.hashNumber(m + n, limit) / 100
  };
}


