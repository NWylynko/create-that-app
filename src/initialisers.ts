import { v4 as uuid } from "uuid";
import type { Options, Initialiser, CommandOptions } from "./types";

export const initialisers = ({ runner, manager }: Options): Initialiser[] => {

  const latest = manager !== "yarn" ? `@latest` : ``

  return [
    {
      id: uuid(),
      name: `React`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: uuid(),
      name: `Typescript React`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name} --template typescript`,
      requiresName: true,
      typescript: true,
    },
    {
      id: uuid(),
      name: `T3`,
      command: ({}: CommandOptions) => `${runner}t3-app${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Next`,
      command: ({}: CommandOptions) => `${runner}next-app${latest}`,
      requiresName: false,
    },
    {
      id: uuid(),
      name: `Typescript Next`,
      command: ({}: CommandOptions) => `${runner}next-app${latest} --typescript`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Gatsby`,
      command: ({ name }: CommandOptions) => `${runner}gatsby${latest} ${name}`,
      requiresName: true,
    },
    {
      id: uuid(),
      name: `Typescript Gatsby`,
      command: ({ name }: CommandOptions) => `${runner}gatsby${latest} ${name} --ts`,
      requiresName: true,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Vue`,
      command: ({ name }: CommandOptions) => `${runner}vue-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: uuid(),
      name: `Nuxt`,
      command: ({ name }: CommandOptions) => `${runner}nuxt-app${latest} ${name}`,
      requiresName: true,
      typescript: true
    },
    {
      id: uuid(),
      name: `Svelte`,
      command: ({ name }: CommandOptions) => `${runner}degit${latest} sveltejs/template ${name}`,
      requiresName: true,
      typescript: true
    }
  ]
}
