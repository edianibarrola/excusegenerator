let who = ['The dog ','My grandma ','His turtle ','My bird ']
let action = ['ate ','peed on ','crushed ','broke ']
let what = ['my homework ', 'the keys ', 'the car ', 'my computer ' ]
let when = ['before the class ','right on time ','when I finished ','during my lunch ','while I was praying ']

window.onload = () => {
    document.querySelector('#excuse').innerHTML = generateExcuse();
    
}

let generateExcuse= () => {
    console.log(who[randomNumber()] + action[randomNumber()] + what[randomNumber()] + when[randomNumber()]);
    return(who[randomNumber()] + action[randomNumber()] + what[randomNumber()] + when[randomNumber()]);
};


function randomNumber(){
    return Math.floor(Math.random()*4);
}

generateExcuse();