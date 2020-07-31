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
]).then(function(response){
    console.log(response);
    
    // fs.appendFile("log.txt", JSON.stringify(response, null, 2) + "\n", 'utf8', function(err){
    //     if(err) return console.log(err);
    //     console.log("Written to log.txt");
    // });

    if(fs.existsSync("log.json")){
        fs.readFile("log.json", 'utf8', function(err, data){
            if(err) return console.log(err);

            let jsondata = JSON.parse(data);
            jsondata[response.username] = response;

            writeMe(jsondata);
        });
    }
    else{
        let jsondata = {};
        jsondata[response.username] = response;
        // jsondata["key"] = data
        writeMe(jsondata);
    }

});

function writeMe(data){
    fs.writeFile("log.json", JSON.stringify(data, null, 2), function(err){
        if(err) return console.log(err);

        console.log("SUCCESS... Hiccup");
    });
}