// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
     },


     {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project',
     },

     {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
      },

      {
         type: 'input',
         name: 'usage',
         message: 'Provide instructions on how to use the application.'
      },

      {
         type:'list',
         name:'license',
         message:'Which license would you like to use?',
         choices: [ 
         'Apache',
         'GNU',
         'MIT',
         'ISC',
         'None',
      ]
      },

      {
         type: 'input',
         name: 'credits',
         message:'List any collaborators with links to their GitHub profiles. List any third party assets or tutorials used.' 
      },
     
      {
         type: 'input',
         name: 'testing',
         message:'Provide any tests that have been created for your application and how to run them.' 
      },

   

      {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
    },
   
     ]
     


// TODO: Create a function to write README file
function writeToFile(filename, markdown) {
   fs.writeFile(filename, markdown, (err) =>
     err ? console.log(err) : console.log("Success!")
   );
 }
 
 function init() {
     inquirer.prompt(questions)
     .then((data) => {
         const markdown = generateMarkdown(data);
         writeToFile('readme.md', markdown);
       });
 }
 

 init();
