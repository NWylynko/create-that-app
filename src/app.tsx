import { Text, Box } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import React, { FC, useEffect, useState } from "react";
import { getInitialiser } from "./getInitialiser";
import { getItems, Item } from "./getItems";
import { initialisers } from "./initialisers";
import { Initialiser } from "./types";
import { getOptions, PackageManagers } from "./getOptions";
import { runner } from "./runner";
import { useAsync } from "./useAsync";
import { report } from "./popularity";
import { sortItems } from "./sortItems";

interface AppProps {
  packageManager: PackageManagers;
  onlyTS: boolean;
  dryrun: boolean;
}

const App: FC<AppProps> = ({ packageManager, onlyTS, dryrun }) => {
  const inits = initialisers(getOptions(packageManager)).filter((i) => !onlyTS || i.typescript);
  const { data: items, execute: fetchItems, loading } = useAsync(() => sortItems(getItems(inits)));

  useEffect(() => {
    fetchItems();
  }, []);

  const [showOptions, setShowOptions] = useState(true);
  const [showNameInput, setShowNameInput] = useState(false);
  const [appName, setAppName] = useState("");

  const [selectedInitialiser, setSelectedInitialiser] = useState<Initialiser | undefined>(undefined);
  const [runInitialiser, setRunInitialiser] = useState(false);

  const { execute } = useAsync(async () => {
    if (selectedInitialiser) {
      const command = selectedInitialiser.command({ name: appName });
      if (dryrun) {
        console.log("command:", command);
      } else {
        await Promise.all([runner(command), report(selectedInitialiser.id)]);
      }
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
    <>
      <Text>Create That App</Text>
      {loading && <Text>Loading...</Text>}
      {dryrun && <Text>Running in Dry run mode, so the command will just be outputted</Text>}
      {showOptions && items && <SelectInput items={items} onSelect={handleSelect} />}
      {showNameInput && (
        <>
          <Box marginRight={1}>
            <Text>Enter your app name:</Text>
          </Box>
          <TextInput value={appName} onChange={setAppName} onSubmit={handleAppName} />
        </>
      )}
    </>
  );
};

// why is this here twice?
module.exports = App;
export default App;
