//Creazione array di oggetti per rappresentare i membri del team.
//MILESTONE 0
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
		photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
		photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
		photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
		photo: 'barbara-ramos-graphic-designer.jpg'
  } 
];

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 1
for( let member of team){
  console.log('Member Name: '+member.name);
  console.log('Member Role: '+member.role);
  console.log('Member Photo: '+member.photo);
  console.log('====================================================');
}

//Stampare le stesse informazioni su DOM sottoforma di stringhe
//MILESTONE 2
const card = document.querySelector('.team-members');
for( let i = 0; i < team.length; i++){
  card.innerHTML += `<div class="card card-member col-4 mx-1 my-1">
                      <div class="card-body">
                        <div class="images">
                          <img src="img/${team[i].photo}" alt="${team[i].name}">
                        </div>
                        <div class="card-text text-center  my-3 ">
                          <h4 class="member-name">${team[i].name}</h4>
                          <span class="member-role">${team[i].role}</span>
                        </div>
                      </div>
                    </div>`
}