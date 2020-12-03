let who = ['The dog ','My grandma ','His turtle ','My bird ']
let action = ['ate ','peed on ','crushed ','broke ']
let what = ['my homework ', 'the keys ', 'the car ', 'my computer ' ]
let when = ['before the class ','right on time ','when I finished ','while I was praying ']

window.onload = () => {
    document.querySelector('#excuse').innerHTML = generateExcuse();
    
}

let generateExcuse= () => {
    //console.log(who[randomNumber()] + action[randomNumber()] + what[randomNumber()] + when[randomNumber()]);
    return(who[randomNumber(who.length)] + action[randomNumber(action.length)] + what[randomNumber(what.length)] + when[randomNumber(when.length)]);
};


function randomNumber(length){
    return Math.floor(Math.random()*length);
}

generateExcuse();

