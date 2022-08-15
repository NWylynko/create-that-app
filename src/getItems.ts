import { Initialiser } from "./types";


export const getItems = (initialisers: Initialiser[]) => {
  return initialisers.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
}

export type Item = ReturnType<typeof getItems>[0];