const inquirer = require('inquirer');
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')


class Employee {
  constructor() {
    // this.role = role;
    // this.id = id;
    // this.email = email;
  }

  getName() {
    inquirer
    .prompt({
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
    })
    .then(({ name }) => {     // destructure the name from the promt
      // this.employee = new Employee(name);
      console.log(name)
    })
  };

  getId() {
    inquirer
    .prompt({
      type: 'input',
      name: 'id',
      message: 'What is the employee ID? (Required)',
      validate: idInput => {
          if(idInput){
              return true;
          } else {
              console.log('Please Enter an ID!');
              return false;
          }
        }
    }).then(({ id }) => {     // destructure the name from the promt
      this.employee = new Employee(id);
    })
  };

  getEmail() {
    inquirer
    .prompt({   
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
      }).then(({ email }) => {     // destructure the name from the promt
        this.employee = new Employee(email);
      })
  };

  getRole() {
    inquirer
    .prompt({   
      type: 'list',
      name: 'role',
      message: "What is the role of this employee? (Required)",
      choices: ['Manager', 'Engineer', 'Intern'],
      validate: emailInput => {
          if(roleInput){
              return true;
          } else {
              console.log('Please enter an Role!');
              return false;
          }
        }
      }).then(({ role }) => {     // destructure the name from the promt
        this.employee = new Employee(role);
      })
  }
}  

module.exports = Employee;



// INQUIRER QUESTIONS ------------------------------------------------------

 
    
//     {
//       type: 'list',
//       name: 'office',
//       message: 'What is the name office number?',
//       choices: ['0012', '0015', '0017', '0019', '0021'],
//       when: ({ role }) => role === 'Manager',
//       validate: officeInput => {
//           if(officeInput){
//               return true;
//           } else {
//               console.log('Please enter choose an office number!')
//               return false
//           }
//       }
//     },

//   {
//     type: 'confirm',
//     name: 'confirmNext',
//     message: 'Would you like to add another colleague?',
//     default: false
// },
//   ]).then(employeeData =>{
//     employees.push(employeeData);

//     if (employeeData.confirmNext){
//         return promptQuestions(employees) 
//     } else {
//         return employees;
//     }
// });
// };