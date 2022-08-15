import { Text, Box } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import React, { FC, useEffect, useState } from "react";
import { getInitialiser } from "./getInitialiser";
import { getItems, Item } from "./getItems";
import { getOptions, Initialiser, initialisers, PackageManagers } from "./initialisers";
import { useAsync } from "./useAsync";

interface AppProps {
  packageManager: PackageManagers;
}

const App: FC<AppProps> = ({ packageManager }) => {
  const inits = initialisers(getOptions(packageManager));
  const items = getItems(inits);

  const [showOptions, setShowOptions] = useState(true);
  const [showNameInput, setShowNameInput] = useState(false);
  const [appName, setAppName] = useState("");

  const [selectedInitialiser, setSelectedInitialiser] = useState<Initialiser | undefined>(undefined);
  const [runInitialiser, setRunInitialiser] = useState(false);

  const { execute, data } = useAsync(async () => {
    if (selectedInitialiser) {
      const command = selectedInitialiser.command({ name: appName });
      return command;
    } else {
      throw new Error("No initialiser selected");
    }
  });

  const handleSelect = (item: Item) => {
    setShowOptions(false);
    const initialiser = getInitialiser(inits, item);
    setSelectedInitialiser(initialiser);

    if (initialiser.requiresName) {
      setShowNameInput(true);
    } else {
      setRunInitialiser(true);
    }
  };

  const handleAppName = () => {
    setShowNameInput(false);
    setRunInitialiser(true);
  };

  useEffect(() => {
    if (runInitialiser) {
      execute();
    }
  }, [runInitialiser]);

  return (
    <Box>
      {showOptions && <SelectInput items={items} onSelect={handleSelect} />}
      {showNameInput && (
        <>
          <Box marginRight={1}>
            <Text>Enter your app name:</Text>
          </Box>
          <TextInput value={appName} onChange={setAppName} onSubmit={handleAppName} />
        </>
      )}
      <Text>{data}</Text>
    </Box>
  );
};

// why is this here twice?
module.exports = App;
export default App;
