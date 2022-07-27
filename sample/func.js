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
    ],
    mul: function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('a or b is not a number');
        }
        return a * b;
    },
    mulv2: function (a, b) {
        if (typeof (a) != 'number' || typeof (b) != 'number') {
            throw new Error('a or b is not a number');
        }
        return a * b;
    }
}

try {
    let res1 = formationJS.mul(2, '2');
    console.log('res1 :', res1);
    let res2 = formationJS.mulv2('2', 2);
    console.log('res2 :', res2);
} catch (error) {
    console.log('Caught error :', error);
}