const inquirer = require('inquirer');
const { copyCssFile, writeHtmlFile } = require('./generate-team-page');
const generateTemplate = require('./team-template');

//ask general questions about the employee
const promptQuestions = (employees) => {

       //if there is no array create one
       if (!employees){
        employees = [];
    }

  return inquirer.prompt([
    {   
      type: 'input',
      name: 'name',
      message: 'What is the employee name? (Required)',
      validate: nameInput => {
          if(nameInput){
              return true;
          } else {
              console.log('Please Enter a Name!');
              return false;
          }
      }
    },
    {   
      type: 'list',
      name: 'role',
      message: 'What is the role of the employee? (Required)',
      choices: ['Manager', 'Engineer', 'Intern'],
      validate: roleInput => {
          if(roleInput){
              return true;
          } else {
              console.log('Please enter a role!');
              return false;
          }
      }
    },
    {   
      type: 'input',
      name: 'id',
      message: 'What is the employee ID? (Required)',
      validate: idInput => {
        if(idInput){
            return true;
        } else {
            console.log('Please enter an ID!');
            return false;
        }
      }
    },
    {   
      type: 'input',
      name: 'email',
      message: "What is the employee's e-mail? (Required)",
      validate: emailInput => {
          if(emailInput){
              return true;
          } else {
              console.log('Please enter an ID!');
              return false;
          }
      }
    },
    {
      type: 'list',
      name: 'office',
      message: 'What is the name office number?',
      choices: ['0012', '0015', '0017', '0019', '0021'],
      when: ({ role }) => role === 'Manager',
      validate: officeInput => {
          if(officeInput){
              return true;
          } else {
              console.log('Please enter choose an office number!')
              return false
          }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
        when: ({ role }) => role === 'Engineer',
        validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log('Please enter a username!')
                return false
            }
        }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the name of their school?',
      when: ({ role }) => role === 'Intern',
      validate: schoolInput => {
          if(schoolInput){
              return true;
          } else {
              console.log('Please enter their school name!')
              return false
          }
      }
  },
  {
    type: 'confirm',
    name: 'confirmNext',
    message: 'Would you like to add another colleague?',
    default: false
},
  ]).then(employeeData =>{
    employees.push(employeeData);

    if (employeeData.confirmNext){
        return promptQuestions(employees) 
    } else {
        return employees;
    }
});
};








promptQuestions()
    .then(teamInfo => {
        return generateTemplate(teamInfo)
    })

    .then(teamTemplate => {
        copyCssFile()
        return writeHtmlFile(teamTemplate)
    });

