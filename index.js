const inquirer = require("inquirer");

const fs = require('fs');

inquirer.prompt([
{
    type: "input",
    message: "What is your name?",
    name: "username"
},
{
    type: "checkbox",
    message: "What languages do you know?",
    choices: ["English", "French", "Japanese", "Russian", "Bulgarian",],
    name: "languages"
},
{
    type: "list",
    message: "What is your preferred method of communciation?",
    choices: ["Klingon", "Fax", "Messenger Pigeon", "Hiccups"],
    name: "communication",
}
  ])
  .then(function(response) {
      console.log(response);
      fs.appendFile("log.text", JSON.stringify(response, null, 2)+ "\n", 'utf8', function(err, data){
        if(err) return console.log(err);
        console.log("written to log.txt");
      });

  });
