import { Item } from "./getItems";
import { Initialiser } from "./types";

export const getInitialiser = (inits: Initialiser[], item: Item) => {
  const init = inits.find((i) => i.id === item.value);

  if (!init) {
    throw new Error(`No initialiser found for ${item.label}`);
  }

  return init;
};
