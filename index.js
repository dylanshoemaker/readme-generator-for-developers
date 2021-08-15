const generatePage  = require("./src/readme-template.js");
const { writeFile } = require("./utils/generateMarkdown.js");
const { promptUser, promptReadMe } = require("./src/questions.js")


promptUser()
  .then(promptReadMe)
  .then(readMeData => {
    return generatePage(readMeData);
  })
  .then(itPutsTheWordsOnThePage => {
    return writeFile(itPutsTheWordsOnThePage);
  })
  .catch((err) => {
    console.log(err);
  });
