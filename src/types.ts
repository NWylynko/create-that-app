type NPM = {
  runner: `npx --yes create-`;
  manager: `npm`;
};
type Yarn = {
  runner: `yarn create `;
  manager: `yarn`;
};
type PNPM = {
  runner: `pnpm dlx -s create-`;
  manager: `pnpm`;
};
export type CommandOptions = {
  name?: string;
};

export type Options = NPM | Yarn | PNPM;
export type PackageManagers = Options["manager"];

export type Initialiser = {
  id: string;
  name: string;
  command: (options: CommandOptions) => string;
  requiresName: boolean;
  typescript?: boolean;
};
