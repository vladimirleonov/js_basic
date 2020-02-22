let questions = ['как ваша фалилия?','как ваше имя?','как ваше отчество?'];
let answers = [];

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

console.log(answers); 

// let i = 0;
// do {
//     answers[i] = prompt (questions[i], '');
//     i++;
// } while(i < questions.length)
// console.log (answers);

// let i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i], '');
//     i++;
// }
// console.log(answers);
