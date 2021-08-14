// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generatePage  = require("./src/readme-template.js");
const { writeFile } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

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
      name: "questions",
      message: "Provide questions. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter questions!");
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

// TODO: Create a function to write README file
promptUser()
  .then(promptReadMe)
  
  .then(readMeData => {
    return generatePage(readMeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
