#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const child_process_1 = require("child_process");
const command = {
    start: "npm create vite@latest",
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "command",
                message: "What would you like to do first ?",
                choices: ["Create a new vite project", "exit"],
            },
        ]);
        let installCommand;
        if (answers.command === "Create a new vite project") {
            installCommand = command.start;
            try {
                (0, child_process_1.execSync)(installCommand, { stdio: "inherit" });
            }
            catch (error) {
                console.error(error);
            }
        }
    });
}
main();
