import type { Option } from "./getOptions";
import type { Initialiser } from "./types";

export const initialisers = ({ runner, create, manager }: Option): Initialiser[] => {

  const latest = manager !== "yarn" ? `@latest` : ``

  const c = `${runner}${create}`;

  const inits: Initialiser[] = [
    {
      id: `react`,
      name: `React`,
      command: ({ name }) => `${c}react-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: `typescript-react`,
      name: `Typescript React`,
      command: ({ name }) => `${c}react-app${latest} ${name} --template typescript`,
      requiresName: true,
      typescript: true,
    },
    {
      id: `t3`,
      name: `T3`,
      command: ({ }) => `${c}t3-app${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: `next`,
      name: `Next`,
      command: ({ }) => `${c}next-app${latest}`,
      requiresName: false,
    },
    {
      id: `typescript-next`,
      name: `Typescript Next`,
      command: ({ }) => `${c}next-app${latest} --typescript`,
      requiresName: false,
      typescript: true,
    },
    {
      id: `gatsby`,
      name: `Gatsby`,
      command: ({ }) => `${c}gatsby${latest}`,
      requiresName: false,
      typescript: true,
    },
    {
      id: `vue`,
      name: `Vue`,
      command: ({ name }) => `${c}vue-app${latest} ${name}`,
      requiresName: true,
    },
    {
      id: `nuxt`,
      name: `Nuxt`,
      command: ({ name }) => `${c}nuxt-app${latest} ${name}`,
      requiresName: true,
      typescript: true
    },
    // { while this works with npx, yarn dlx is failing
    //   id: `svelte`,
    //   name: `Svelte`,
    //   command: ({ name }) => `${runner}degit${latest} sveltejs/template ${name}`,
    //   requiresName: true,
    //   typescript: true
    // },
    {
      id: `sst`,
      name: `SST`,
      command: ({ name }) => `${c}sst${latest} ${name}`,
      requiresName: true,
      typescript: true
    },
    {
      id: `turborepo`,
      name: `Turborepo`,
      command: () => `${c}turbo${latest}`,
      requiresName: false,
      typescript: true
    },
    {
      id: `docusaurus-classic`,
      name: `Docusaurus Classic`,
      command: ({ name }) => `${c}docusaurus${latest} ${name} classic`,
      requiresName: true,
      typescript: false
    },
    {
      id: `docusaurus-classic-typescript`,
      name: `Docusaurus Classic Typescript`,
      command: ({ name }) => `${c}docusaurus${latest} ${name} classic --typescript`,
      requiresName: true,
      typescript: true
    }, {
      id: `expo`,
      name: `Expo`,
      command: ({ name }) => `${c}expo-app${latest} ${name}`,
      requiresName: true,
      typescript: false,
    }, {
      id: `expo-typescript`,
      name: `Expo Typescript`,
      command: ({ name }) => `${c}expo-app${latest} ${name} -t expo-template-blank-typescript`,
      requiresName: true,
      typescript: true
    },
    {
      id: `remix`,
      name: `Remix`,
      command: ({ name }) => `${c}remix${latest} ${name}`,
      requiresName: true,
      typescript: true
    }
  ]

  return inits;
}
