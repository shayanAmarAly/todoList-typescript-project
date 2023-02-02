import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const response = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter your work to add in the todo list"
        },
        {
            name: "more_todo",
            type: "confirm",
            message: "Do you want to add more in the list",
            default: false
        },
        {
            name: "display",
            type: "confirm",
            message: "Do you want to display todo in the list",
            default: false
        },
    ])

    const {todo, more_todo, display} = response;
    console.log(response);
    loop = more_todo;

     if (todo) {
        todos.push(todo);
     } else if (display == true) {
        todos.forEach((todo)=>{
            console.log(todo)
        })
     }
     else {
        console.log("Kindly add value in input")
     }
}

if (todos.length > 0) {
    console.log(`Your todo list: `)
    todos.forEach((todo)=>{
        console.log(todo)
    })
}else{
    console.log("no todos found")
}