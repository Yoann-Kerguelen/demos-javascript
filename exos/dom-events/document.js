/*var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'Nouveau titre';
        console.log('Document title: ', document.title);
        console.log(document.getElementsByTagName("h1"));
        console.log(document.getElementsByClassName("text-red"));
        console.log(document.getElementById("title"));
    }
};
app.init();*/

var title1 = document.getElementById('title-1');
// Choix 1
title1.addEventListener('click', function (e) {
    console.log(e);
    alert('Hello title-1');
})
// Choix 2
title1.onclick = function () {
    alert('Hello title 1');
}