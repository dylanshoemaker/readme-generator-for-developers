const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your project title",
    },
  ]);
};
const promptReadMe = (readMeData) => {
  console.log(`
===========================
Add the bulk of your readme
===========================
`);
  // If there's no 'projects' array property, create one
  if (!readMeData.projects) {
    readMeData.projects = [];
  }
  return inquirer.prompt([
    {
      type: "input",
      name: "description",
      message: "Provide a description of your application. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter the installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter the usage information!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like to choose",
      choices: ['MIT', 'GNU General Public License (GPL) 2.0', 'Apache License 2.0', 'GNU General Public License (GPL) 3.0'],
    },
    {
      type: "input",
      name: "contribution",
      message: "Provide contribution guidelines. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter the contribution guidelines!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "Provide test instructions. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter the test instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questionsPartOne",
      message: "What is your github username? (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter your github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questionsPartTwo",
      message: "What is a good email for people to send you their questions? (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter your email!");
          return false;
        }
      },
    },
  ])
  .then((projectData) => {
    readMeData.projects.push(projectData);
    if (projectData) {
      return readMeData;
    }
  });
};


module.exports =  {promptUser, promptReadMe} ;
