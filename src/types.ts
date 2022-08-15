
type NameOption = {
  name: string;
};

export type CommandOptions = {}


export type Initialiser = {
  id: string;
  name: string;
  typescript?: boolean;
} & ({
  command: (options: CommandOptions & NameOption) => string;
  requiresName: true;
} | {
  command: (options: CommandOptions) => string;
  requiresName: false;
})
