#!/usr/bin/env node

"use strict";

import terminalImage from "terminal-image";
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const colors = {
  primary: "#a95fed",
};

const data = {
  name: "Bouazza Ayyoub",
  whoIAm:
    "Excited to Build Software Products and Help Others Learn Computer Science.",
  linkedIn: "https://www.linkedin.com/in/bouazza-ayyoub",
  twitter: "https://twitter.com/AyyoubBouazza",
  github: "https://github.com/bouazzaayyoub",
  medium: "https://medium.com/@bouazzaayyoub",
  whatIamDoing:
    "I will help you build software products and learn computer science.",
};

// Build the card
const me = boxen(
  [
    `${chalk.hex(colors.primary).bold(data.name)}`,
    ``,
    `${chalk.white.bold("Software Engineer")}`,
    `${data.whoIAm}`,
    ``,
    `${chalk.hex(colors.primary).bold("Contact:")}`,
    `${chalk.white.bold("LinkedIn:")}  ${chalk.underline(data.linkedIn)}`,
    `${chalk.white.bold("Medium:")}    ${chalk.underline(data.medium)}`,
    `${chalk.white.bold("Github:")}    ${chalk.underline(data.github)}`,
    `${chalk.white.bold("Twitter:")}   ${chalk.underline(data.twitter)}`,
    ``,
    `${chalk.hex(colors.primary).bold("About me:")}`,
    `${chalk.italic(data.whatIamDoing)}`,
    ``,
    `${chalk.italic("Let's talk")} ${chalk.hex(colors.primary)(":)")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 2,
    borderStyle: "round",
    borderColor: colors.primary,
  }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");

// Show the tip
console.log(tip);

// Ask the Inquirer questions.
const prompt = inquirer.createPromptModule();
// Questions after the card
const questions = [
  {
    type: "list",
    name: "action",
    message: "Do you want to build a software product?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("bouazza6ayyoub@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Nice to meet you",
        value: () => {
          console.log("Nice to meet you too!\n");
        },
      },
    ],
  },
];
prompt(questions).then((answer) => answer.action());
