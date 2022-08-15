import { Box } from "ink";
import SelectInput from "ink-select-input";
import React, { FC, useState } from "react";
import { getItems, Item } from "./getItems";
import { getOptions, Initialiser, initialisers, PackageManagers } from "./initialisers";

interface AppProps {
  packageManager: PackageManagers;
}

const getInitialiser = (inits: Initialiser[], item: Item) => {
  const init = inits.find((i) => i.id === item.value);

  if (!init) {
    throw new Error(`No initialiser found for ${item.label}`);
  }

  return init;
};

const App: FC<AppProps> = ({ packageManager }) => {
  const inits = initialisers(getOptions(packageManager));
  const items = getItems(inits);

  const [showInput, setShowInput] = useState(true);

  const handleSelect = (item: Item) => {
    setShowInput(false);
    const initialiser = getInitialiser(inits, item);

    if (initialiser.requiresName) {
      // get the name
    } else {
      const command = initialiser.command({});
      console.log("`" + command + "`");
    }
  };

  return <Box>{showInput && <SelectInput items={items} onSelect={handleSelect} />}</Box>;
};

// why is this here twice?
module.exports = App;
export default App;
