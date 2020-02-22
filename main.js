let age = prompt ('сколько вам лет?', '');

if (age > 18 && age < 30) {
    alert ('добро пожаловать!');
} else if (age >= 30) {
    alert('ты уже слишком взрослый');
} else {
    alert('тебе еще нужно подрасти');
}

// let age = prompt('сколько тебе лет', '');

// switch (age) {
//     case '18': 
//         alert ('добро пожаловать!');
//         break;
//     case '100': 
//         alert('ты уже слишком большой');
//         break;
//     default: 
//         alert('ты еще маленький'); 
// }