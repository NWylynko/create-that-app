import { spawn } from 'child_process';

export const runner = (command: string) => {
  return new Promise((resolve, reject) => {
    const shell = spawn(command, { 
      shell: true, 
      stdio: "inherit",
    });

    shell.on("error", reject);

    shell.on("close", resolve);
    shell.on("disconnect", resolve);
    shell.on("exit", resolve);
  })
}