 //create an about section if the user chose to do so
 const generateLogo = role => {
    if (role === 'Engineer'){
        return '🚧';
    } else if (role === 'Manager'){
      return '💼';
    } else {
      return '📓';
    }
  }

const infoByRole = role =>  {   
  if (role === 'Engineer'){
    return '🚧';
  } else if (role === 'Manager'){
  return '💼';
  } else {
  return '📓';
  }
}



module.exports = teamData => {

  return `
  <!DOCTYPE html> 
  <html lang="en"> 

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Builder</title>
    <link rel="stylesheet" href="teststyle.css">
  </head>

  <body>
    <header class="container flex-row justify-space-between align-center py-3">
              <h1 class="page-title text-secondary bg-dark py-2 px-3">MY TEAM</h1>
    </header>

    <main class="container my-5">
    ${teamData.map(({name, role, id, email}) => {
          return `
        <div>
          ${name}
          ${generateLogo(role)} ${role}
          ${id}
          ${email}
        </div>
          `;
      })}
    </main>
  </body>
  </html>
  `;
};

