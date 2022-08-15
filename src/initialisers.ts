
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

type Initialiser = {
  name: string;
  command: (options: CommandOptions) => string;
  requiresName: boolean;
  typescript?: boolean;
}

export const initialisers = ({ runner }: Options): Initialiser[] => [
  {
    name: `React App`,
    command: ({ name }: CommandOptions) => `${runner}react-app@latest ${name}`,
    requiresName: true,
  },
  {
    name: `Typescript React App`,
    command: ({ name }: CommandOptions) => `${runner}react-app@latest ${name} --template typescript`,
    requiresName: true,
    typescript: true,
  }
]
