import { v4 as uuid } from "uuid";

type NPM = {
  runner: `npx --yes create-`,
  manager: `npm`
}

type Yarn = {
  runner: `yarn create `,
  manager: `yarn`
}

type PNPM = {
  runner: `pnpm dlx create-`,
  manager: `pnpm`
}

type CommandOptions = {
  name?: string;
}

type Options = NPM | Yarn | PNPM
export type PackageManagers = Options["manager"];

export type Initialiser = {
  id: string;
  name: string;
  command: (options: CommandOptions) => string;
  requiresName: boolean;
  typescript?: boolean;
}

export const getOptions = (packageManager: PackageManagers): Options => {
  switch (packageManager) {
    case "npm":
      return {
        runner: `npx --yes create-`,
        manager: `npm`
      }
    case "yarn":
      return {
        runner: `yarn create `,
        manager: `yarn`
      }
    case "pnpm":
      return {
        runner: `pnpm dlx create-`,
        manager: `pnpm`
      }
    default:
      throw new Error(`Unknown package manager: ${packageManager}`)
    }
}

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
    }
  ]
}
