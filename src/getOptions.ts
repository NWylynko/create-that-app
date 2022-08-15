
// this is so stupid but I don't know a better way to get it strongly defined arghh
type NPM = {
  runner: "npx --yes ";
  create: "create-";
  manager: "npm";
}
const npm: NPM = {
  runner: `npx --yes `,
  create: `create-`,
  manager: `npm`
}

type Yarn = {
  runner: "yarn -q dlx ";
  create: "create-";
  manager: "yarn";
}
const yarn: Yarn = {
  runner: "yarn -q dlx ",
  create: "create-",
  manager: "yarn"
}

type PNPM = {
  runner: "pnpm -s dlx ";
  create: "create-";
  manager: "pnpm";
}
const pnpm: PNPM = {
  runner: "pnpm -s dlx ",
  create: "create-",
  manager: "pnpm"
}

const options = {
  npm,
  yarn,
  pnpm
}

export type Option = NPM | Yarn | PNPM;
export type PackageManagers = Option["manager"];

export const getOptions = (packageManager: PackageManagers): Option => {

  const option = options[packageManager];

  if (!option) {
    throw new Error(`Unknown package manager: ${packageManager}`);
  }

  return option;
};

