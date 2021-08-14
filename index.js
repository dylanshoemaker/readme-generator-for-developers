// TODO: Include packages needed for this application


const generatePage  = require("./src/readme-template.js");
const { writeFile } = require("./utils/generateMarkdown.js");
const { promptUser, promptReadMe } = require("./src/questions.js")
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
