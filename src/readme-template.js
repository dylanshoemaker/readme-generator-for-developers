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

${description}

![GitHub license](https://img.shields.io/static/v1?label=License&message=${license}&color=blue&style=for-the-badge)

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
