#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card
const questions = [
  {
    type: "list",
    name: "action",
    message: "Do you have something to told me?",
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

// Data for the card
const data = {
  name: chalk.bold.green("Bouazza Ayyoub"),
  iam: `${chalk.white("Software Engineer Student")} ${chalk
    .hex("#2b82b2")
    .bold()}`,
  linkedin:
    chalk.gray("https://www.linkedin.com/in/") + chalk.blue("bouazza-ayyoub"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("AyyoubBouazza"),
  github: chalk.gray("https://github.com/") + chalk.green("bouazzaayyoub"),

  school:
    chalk.white("The High National School of Mines in Rabat-") +
    chalk.yellow("ENSMR"),
  npx: chalk.red("npx") + " " + chalk.white("ayyoubouazza"),

  labelIam: chalk.white.bold("I am a:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelSchool: chalk.white.bold("School:"),
  labelCard: chalk.white.bold("Card:"),
};

// Build the card
const me = boxen(
  [
    `${""}                    ${data.name}`,
    ``,
    `${data.labelIam}   ${data.iam}`,
    `${data.labelSchool}   ${data.school}`,
    `${data.labelLinkedIn} ${data.linkedin}`,
    `${data.labelGitHub}   ${data.github}`,
    `${data.labelTwitter}  ${data.twitter}`,
    ``,
    `${data.labelCard}     ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm a developer, ENIM Lover and student most of the time."
    )}`,
    `${chalk.italic(
      "I aspire to inspire others and to change my environment."
    )}`,
    `${chalk.italic("Let's talk | Let's work together")} ${chalk.yellow(":)")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "green",
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
prompt(questions).then((answer) => answer.action());
