// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr.map(({ description, installation, usage, contribution, test, questions }) => {
          return ` <h3>Description<h3>
            <h3>${description}</h3>
            <h3>Table of Contents</h3>
            <a href="#real-cool-heading">Installation</a>
            <a href="#real-cool-heading">Usage</a>
            <a href="#real-cool-heading">License</a>
            <a href="#real-cool-heading">Contributing</a>
            <a href="#real-cool-heading">Tests</a>
            <a href="#real-cool-heading">Questions</a>
            <p>${installation}</p>
            <p>${usage}</p>
            ![NPM License](https://img.shields.io/npm/l/:packageName)
            <p>${contribution}</p>
            <p>${test}</p>
            <p>${questions}</p> ` })
        .join('')}
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, ...header } = templateData;
  console.log("This is template data");
  console.log(templateData);
  return `

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.title}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">${generateProjects(projects)}</main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.title}</h3>
    </footer>
  </body>
  </html>
  `;
};

