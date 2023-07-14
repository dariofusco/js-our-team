/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

const ourTeam = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        photo: "wayne - barnett - founder - ceo.jpg",
    },

    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },

    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },

    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },

    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },

    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },
];

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.*/

console.log(ourTeam)

/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.*/

for (i = 0; i < ourTeam.length; i++) {
    const memberTeamObject = ourTeam[i]
    console.log(memberTeamObject)
    const teamList = document.querySelector(".team-list");
    teamList.innerHTML += `<li class="list-group-item">NAME: ${memberTeamObject.firstName} ${memberTeamObject.lastName}; ROLE: ${memberTeamObject.role}; PHOTO: ${memberTeamObject.photo}</li>`
}





