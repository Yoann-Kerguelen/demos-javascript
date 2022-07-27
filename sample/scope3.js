(function (window) {

    let listContact = [
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

    var yoNameSpace = {};

    yoNameSpace.getListContact = function () {
        console.log(listContact);
    };

    window.yoNameSpace = yoNameSpace;

})(window);

yoNameSpace.getListContact();