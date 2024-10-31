import inquirer from "inquirer";
console.log("\n\tWELCOME TO MY QUIZ GAME!\n\t");
console.log("You are required to get maximum 4 points");
console.log("\tLET'S GET STARTED!\t");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.Pick a way to describe an object's shape.",
        choices: ["a: Let", "b: Const", "c: Variable", "d: Interface"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.A type that allows a variable to be one of a set of predefined values is",
        choices: ["a: Enum", "b: Array", "c: Object", "d: Variable"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.A block of code that does something is called:",
        choices: ["a: Object", "b: Function", "c: Interface", "d: Type"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Pick a way to make something available to use in other files.",
        choices: ["a: Import", "b: Default", "c: Export", "d: Generics"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.What is an Array?",
        choices: ["a: A Block Of Code.", "b: A way to organize code.", "c: A kind of value.", "d: A list of items."]
    },
]);
let points = 0;
switch (quiz.question_1) {
    case "d: Interface":
        console.log("1. Correct!");
        ++points;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "a: Enum":
        console.log("2. Correct!");
        ++points;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "b: Function":
        console.log("3. Correct!");
        ++points;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "c: Export":
        console.log("4. Correct!");
        ++points;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "d: A list of items.":
        console.log("5. Correct!");
        ++points;
        break;
    default:
        console.log("5. Incorrect!");
}
if (points >= 4) {
    console.log(`Your Points: ${points}`);
    console.log("congrats! You win the Quiz Game...!");
}
else {
    console.log(`Your Points: ${points}`);
    console.log("Oops! You loss the Quiz Game..!");
}
;
