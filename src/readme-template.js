// let mitVar ;
// const generateBadges = (mitVar) => {
//   return `
//   ${mitVar.key1}
  
  
  
//   `
// }
// create the projects section
const generateProjects = (projectsArr) => {
  
  return `
      ${projectsArr.map(
        ({
          description,
          installation,
          usage,
          license,
          contribution,
          test,
          questionsPartOne,
          questionsPartTwo,
        }) => {
          console.log("license");
          console.log(license);
          console.log("license");
          return `
# Description
- ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
${description}

# Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation 

${installation}

# Usage

${usage}

# License

> This project is using the ${license} license.

# Contributing

${contribution}

# Tests

${test}

# Questions

> ${questionsPartOne}

> ${questionsPartTwo}
`;
        }
      )}`;
      
};


// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  const { projects, ...header } = templateData;
  console.log("This is template data");
  console.log(templateData);
  //console.log(projects[0].license);
  return `
# ${header.title}
${generateProjects(projects)}
  `;
};
