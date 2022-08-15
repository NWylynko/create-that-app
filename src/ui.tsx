import React, { FC } from "react";
import { Text } from "ink";
import { getOptions, initialisers, PackageManagers } from "./initialisers";

interface AppProps {
  packageManager: PackageManagers;
}

const App: FC<AppProps> = ({ packageManager }) => {
  const inits = initialisers(getOptions(packageManager));

  const react = inits[1]?.command({ name: "my-react-app" });

  return (
    <Text>
      <Text>{JSON.stringify({ inits, react }, null, 2)}</Text>
    </Text>
  );
};

// why is this here twice?
module.exports = App;
export default App;
