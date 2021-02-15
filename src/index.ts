
let msg = `Bienvenue dans notre mini jeu "donjons et dragons`;
console.log(msg);




const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'namePerso',
        message: 'Choississez un nom pour votre personnage ?'
    });

    console.log("Votre personnage s'appelle " +response.namePerso);
})();
// const prompts = require('prompts');
//
// const questions = [
//     {
//         type: 'text',
//         name: 'username',
//         message: 'What is your GitHub username?'
//     },
//     {
//         type: 'number',
//         name: 'age',
//         message: 'How old are you?'
//     },
//     {
//         type: 'text',
//         name: 'about',
//         message: 'Tell something about yourself',
//         initial: 'Why should I?'
//     }
// ];


// (async () => {
//     const response = await prompts(questions);
//
//     // => response => { username, age, about }
// })();
