// create the projects section
const generateProjects = (projectsArr) => {
  return `
      ${projectsArr.map(
        ({
          description,
          installation,
          usage,
          contribution,
          test,
          questionsPartOne,
          questionsPartTwo,
        }) => {
          return `## Description
          > ${description}
          
          ###Table of Contents
            *<a href="#real-cool-heading">Installation</a>
            *<a href="#real-cool-heading">Usage</a>
            *<a href="#real-cool-heading">License</a>
            *<a href="#real-cool-heading">Contributing</a>
            *<a href="#real-cool-heading">Tests</a>
            *<a href="#real-cool-heading">Questions</a>
          
          ### Installation
          > ${installation}
          
          ### Usage
          > ${usage}
          
          ### License
          
          
          ### Contributing
          > ${contribution}
          
          ### Tests
          > ${test}
          
          ### Questions
          > ${questionsPartOne}
          > ${questionsPartTwo}
          `
        })}`;
};

// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  const { projects, ...header } = templateData;
  console.log("This is template data");
  console.log(templateData);
  return `
      # ${header.title}
      ${generateProjects(projects)}
  `;
};
