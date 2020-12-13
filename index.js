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
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("bouazza6ayyoub@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Good Bye!\n");
        },
      },
    ],
  },
];

// Data for the card
const data = {
  name: chalk.bold.green("Bouazza Ayyoub"),
  work: `${chalk.white("Software Engineer Student")} ${chalk
    .hex("#2b82b2")
    .bold()}`,
  linkedin:
    chalk.gray("https://www.linkedin.com/in/") +
    chalk.whiteBright("bouazza-ayyoub"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("bouazza.ayyoub"),
  github: chalk.gray("https://github.com/") + chalk.green("bouazzaayyoub"),

  school: chalk.cyan("ENSMR"),
  npx: chalk.red("npx") + " " + chalk.white("ayyoubouazza"),

  labelWork: chalk.white.bold("Work:"),
  labelBlog: chalk.white.bold("Blog:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelSchool: chalk.white.bold("School:"),
  labelCard: chalk.white.bold("Card:"),
};

// Build the card
const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}     ${data.work}`,
    `${data.labelBlog}     ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}   ${data.github}`,
    `${data.labelLinkedIn} ${data.linkedin}`,
    `${data.labelSchool}   ${data.school}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic and student most of the time."
    )}`,
    `${chalk.italic("The rest of the time I experiment with my code,")}`,
    `${chalk.italic("to bring my ideas to life.")}`,
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
