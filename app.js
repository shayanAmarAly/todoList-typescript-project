"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var todos = [];
var loop = true;
while (loop) {
    var response = await inquirer_1["default"].prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter your work to add in the todo list"
        },
        {
            name: "more_todo",
            type: "confirm",
            message: "Do you want to add more in the list",
            "default": false
        },
    ]);
    var todo = response.todo, more_todo = response.more_todo;
    console.log(response);
    loop = more_todo;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly add value in input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list: ");
    todos.forEach(function (todo) {
        console.log(todo);
    });
}
else {
    console.log("no todos found");
}
