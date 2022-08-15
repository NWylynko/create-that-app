import React, { FC } from "react";
import { Text } from "ink";
import { initialisers } from "./initialisers";

const App: FC = () => {
  const inits = initialisers({
    runner: "yarn create ",
    manager: "yarn",
  });

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
