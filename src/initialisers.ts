import { v4 as uuid } from "uuid";
import type { Options, Initialiser, CommandOptions } from "./types";

export const initialisers = ({ runner, manager }: Options): Initialiser[] => {

  const latest = manager !== "yarn" ? `@latest` : ``

  return [
    {
      id: uuid(),
      name: `React App`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: uuid(),
      name: `Typescript React App`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name} --template typescript`,
      requiresName: true,
      typescript: true,
    },
    {
      id: uuid(),
      name: `T3 App`,
      command: ({}: CommandOptions) => `${runner}t3-app${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Next App`,
      command: ({}: CommandOptions) => `${runner}next-app${latest}`,
      requiresName: false,
    },
    {
      id: uuid(),
      name: `Typescript Next App`,
      command: ({}: CommandOptions) => `${runner}next-app${latest} --typescript`,
      requiresName: false,
      typescript: true,
    }
  ]
}
