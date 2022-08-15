// heavily inspired and stolen from https://github.com/t3-oss/create-t3-app/blob/47ab51d39b075fa243fe734ccdb0b6a2d6d2b310/src/utils/getUserPkgManager.ts

import { PackageManagers } from "./types";

export const getPackageManager = (): PackageManagers => {

  const packageManager = process.env["npm_config_user_agent"];

  if (packageManager?.startsWith("yarn")) return "yarn";
  if (packageManager?.startsWith("pnpm")) return "pnpm";

  return "npm";

}
