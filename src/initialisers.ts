
type NPM = {
  runner: `npx create-`,
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

type Initialiser = {
  name: string;
  command: (options: CommandOptions) => string;
  requiresName: boolean;
  typescript?: boolean;
}

export const getOptions = (packageManager: PackageManagers): Options => {
  switch (packageManager) {
    case "npm":
      return {
        runner: `npx create-`,
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
      name: `React App`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name}`,
      requiresName: true,
    },
    {
      name: `Typescript React App`,
      command: ({ name }: CommandOptions) => `${runner}react-app${latest} ${name} --template typescript`,
      requiresName: true,
      typescript: true,
    }
  ]
}
