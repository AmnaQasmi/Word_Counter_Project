#! /usr/bin/env node

import inquirer from "inquirer";

////   " Word_Counter_Project "   ////

const answers : {
    Sentences : string
} = await inquirer.prompt ([
    {
        name:"Sentences",
        type:"input",
        message:"Enter your sentence for word counter : "
    }
])
const word = answers.Sentences.trim().split( " " )
console.log(`Your sentence for word counter is ${word.length}`)