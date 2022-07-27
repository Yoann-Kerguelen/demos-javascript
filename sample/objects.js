var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/01/1970',
    dateFin: '19/01/2038',
    stagiaires: [
        {
            nom: 'Lola',
            prenom: 'Rodrigue'
        },
        {
            nom: 'Rosselle',
            prenom: 'Edouard'
        },
        {
            nom: 'Jeanne',
            prenom: 'Agnes'
        }
    ]
}

console.log(formationJS);

var arr = new Array(
    {
        nom: 'Lola',
        prenom: 'Rodrigue'
    },
    {
        nom: 'Rosselle',
        prenom: 'Edouard'
    },
    {
        nom: 'Jeanne',
        prenom: 'Agnes'
    }
);



var obj = { objet: 'objet' };

console.log('Nom de la formation :', formationJS.nom);
console.log('Langage cible :', formationJS.langage);
console.log('Dates de début et de fin de la formation :', 
formationJS.dateDebut, '-', formationJS.dateFin);


formationJS.formateur = {
    nom: 'Ghyslain',
    prenom: 'Jean-Charles'
};

console.log(formationJS);

console.log('Formateur :', formationJS.formateur);


formationJS.description = function() {
    return this.nom + ' : ' + this.dateDebut + ' - ' + this.dateFin;
};

console.log(formationJS.description());

delete formationJS.stagiaires;
console.log(formationJS);


console.log('');
function Formation() {
    this.nom = 'Module JavaScript';
    this.langage = 'JavaScript';
    this.dateDebut = new Date(1970, 0, 1).toDateString();
    this.dateFin = new Date(2038, 0, 19).toDateString();
    this.stagiaires = [
        {
            nom: 'Lola',
            prenom: 'Rodrigue'
        },
        {
            nom: 'Rosselle',
            prenom: 'Edouard'
        },
        {
            nom: 'Jeanne',
            prenom: 'Agnes'
        }
    ];
    this.formateur = {
        nom: 'Ghyslain',
        prenom: 'Jean-Charles'
    };
}

var formation = new Formation();
var formation1 = new Formation();
console.log('Are formations equal?', formation == formation1);
console.log('Nom de la formation :', formation.nom);
console.log('Langage cible :', formation.langage);
console.log('Dates de début et de fin de la formation :', 
formation.dateDebut, '-', formation.dateFin);


function Formationv2(nom, langage, dateDebut, dateFin) {
    this.nom = nom;
    this.langage = langage;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
}

var formationv2 = new Formationv2('Module JavaScript', 'JavaScript', 
                              new Date(1970, 0, 1).toDateString(), new Date(2038, 0, 19).toDateString());
console.log(formationv2);

function Personne(nomParametre, prenom, age) {
    this.nomFonction = nomParametre;
    this.prenom = prenom;
    this.age = age;
}

function Stagiaire(nom, prenom, age, connaissances) {
    Personne.call(this, nom, prenom, age);
    this.connaissances = connaissances;
}

Stagiaire.prototype = new Personne();
Stagiaire.prototype.constructor = Stagiaire;


stagiaire = new Stagiaire('Jean', 'Jeanjeanjean', 28, ['Word, Excel, PowerPoint, dynamique des fluides']);

console.log(stagiaire);
console.log('stagiaire est une instance de Stagiaire :', stagiaire instanceof Stagiaire);
console.log('stagiaire est une instance de Personne :', stagiaire instanceof Personne);
