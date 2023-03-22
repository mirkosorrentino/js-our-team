/** 
 * [X] Creare un array:
 *  [X] un oggetto per ogni persona con nome, cognome, ruolo e foto
 *  [X] stampare su console le informazioni di ogni persona (per la foto stampare stringa)
 *  [X] stampare informazioni su dom sotto forma di stringa
 *  [] (bonus) trasfromare la foto da stringa a immagine
 *  [] (bonus) organizzare i singoli membri in card
 */

const peopleArray = [
    {
        name: "Wayne",
        lastName: "Barnett",
        job: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastName: "Carroll",
        job: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        lastName: "Gordon",
        job: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        lastName: "Lopez",
        job: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        lastName: "Estrada",
        job: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        lastName: "Ramos",
        job: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

const listElem = document.querySelector("ul");
let listContent = '';

for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i]);
    listContent += `
    <li>
    <img src="img/${peopleArray[i].photo}" alt="official photo">
    <h3>${peopleArray[i].name} ${peopleArray[i].lastName}</h3>
    <div class="role">${peopleArray[i].job}</div>
    </li>
    `
};

listElem.innerHTML = listContent;

