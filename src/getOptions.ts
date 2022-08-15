import { PackageManagers, Options } from "./types";


export const getOptions = (packageManager: PackageManagers): Options => {
  switch (packageManager) {
    case "npm":
      return {
        runner: `npx --yes create-`,
        manager: `npm`
      };
    case "yarn":
      return {
        runner: `yarn create `,
        manager: `yarn`
      };
    case "pnpm":
      return {
        runner: `pnpm -s dlx create-`,
        manager: `pnpm`
      };
    default:
      throw new Error(`Unknown package manager: ${packageManager}`);
  }
};
