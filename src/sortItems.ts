import { Item } from "./getItems";
import { popularity } from "./popularity";

export const sortItems = async (items: Item[]) => {
  const popular = await popularity();

  return items.sort((a, b) => {
    const aPopular = popular.find(p => p.id === a.value) ?? { id: a.value, count: 0 };
    const bPopular = popular.find(p => p.id === b.value) ?? { id: b.value, count: 0 };

    if (aPopular && bPopular) {
      return bPopular.count - aPopular.count;
    }

    return 0;
  })
}