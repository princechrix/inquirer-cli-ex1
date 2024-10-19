#!/usr/bin/env node

import inquirer from "inquirer";
import { execSync } from "child_process";

const command = {
  start: "npm create vite@latest",
};
async function main() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What would you like to do first ?",
      choices: ["Create a new vite project", "exit"],
    },
  ]);
  let installCommand: string;

  if (answers.command === "Create a new vite project") {
    installCommand = command.start;
    try {
      execSync(installCommand, { stdio: "inherit" });
    } catch (error) {
      console.error(error);
    }
  }
}

main();
