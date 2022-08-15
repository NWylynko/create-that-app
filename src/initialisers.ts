import { v4 as uuid } from "uuid";
import type { Option } from "./getOptions";
import type { Initialiser } from "./types";

export const initialisers = ({ runner, create, manager }: Option): Initialiser[] => {

  const latest = manager !== "yarn" ? `@latest` : ``

  const c = `${runner}${create}`;

  const inits: Initialiser[] = [
    {
      id: uuid(),
      name: `React`,
      command: ({ name }) => `${c}react-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: uuid(),
      name: `Typescript React`,
      command: ({ name }) => `${c}react-app${latest} ${name} --template typescript`,
      requiresName: true,
      typescript: true,
    },
    {
      id: uuid(),
      name: `T3`,
      command: ({}) => `${c}t3-app${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Next`,
      command: ({}) => `${c}next-app${latest}`,
      requiresName: false,
    },
    {
      id: uuid(),
      name: `Typescript Next`,
      command: ({}) => `${c}next-app${latest} --typescript`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Gatsby`,
      command: ({}) => `${c}gatsby${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: uuid(),
      name: `Vue`,
      command: ({}) => `${c}vue-app${latest}`,
      requiresName: false,
    },
    {
      id: uuid(),
      name: `Nuxt`,
      command: ({}) => `${c}nuxt-app${latest}`,
      requiresName: false,
      typescript: true
    },
    // { while this works with npx, yarn dlx is failing
    //   id: uuid(),
    //   name: `Svelte`,
    //   command: ({ name }) => `${runner}degit${latest} sveltejs/template ${name}`,
    //   requiresName: true,
    //   typescript: true
    // }
  ]

  return inits;
}
