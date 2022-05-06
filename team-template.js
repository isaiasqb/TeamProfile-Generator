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

const officeInfo = info =>  {   
  if (info){
    return `
    <div class="card-body text-info">
    <h3>Office No:</h3>
    <p class="card-text">${info}</p>
    </div>
    `;
  } else {
    return '';
  }
}

const githubInfo = info =>  {   
  if (info){
    return `
    <div class="card-body text-info">
    <h3>Github Profile:</h3>
    <p class="card-text"><a href="https://github.com/${info}" target="_blank">${info}</a></p>
    </div>
    `;
  } else {
    return '';
  }
}

const schoolInfo = info =>  {   
  if (info){
    return `
    <div class="card-body text-info">
    <h3>School Name:</h3>
    <p class="card-text">${info}</p>
    </div>
    `;
  } else {
    return '';
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="teststyle.css">
</head>
  <body>
    <header class="">
      <h1 class="jumbotron">My Team</h1>
    </header>

    <main class="d-flex justify-content-center">
          ${teamData.map(({name, role, id, email, office, github, school}) => {
                return `
              <div class="card border-info mb-3">
                <h2 class="card-header">${name}</h2>
                <h3 class="card-title">${generateLogo(role)} ${role}</h3>
                <p class="card-text">Employee ID: ${id}</p>
                <p class="card-text">Employee Email: <a href="mailto:${email}">${email}</a></p>
                <div class="card-body">
                ${officeInfo(office)}
                ${githubInfo(github)}
                ${schoolInfo(school)}
                </div>
              </div>
                `;
            }).join('')
          }
    </main>
  </body>
  </html>
  `;
};
