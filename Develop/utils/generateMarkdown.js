// function to generate markdown for README
function generateMarkdown(data) {
  return
  `# ${data.title}

  ## Github Username: ${data.github}

  ## Email ${data.email}

  ## Description: ${data.description}


  ## Table of Contents: 
  * [Description] (##Description)
  * [Installation] (##Installation)
  * [Usage] (###Usage)
  * [Licenses] (###Licenses)
  * [Contributing] (###Contributing)
  * [Tests] (###Tests)


  ### Installation: ${data.installation}


  ### Usage: ${data.usage}


  ### Licenses: ${data.license}


  ### Contributing: ${data.contributing}


  ### Tests: ${data.tests}

 `;


}

module.exports = generateMarkdown;
