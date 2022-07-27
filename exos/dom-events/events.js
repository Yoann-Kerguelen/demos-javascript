/////////////////////------P4----------///////////////////////////////
var app = {
    init: function () {
        var button = document.createElement('button');
        document.body.appendChild(button);
        button.className = "button";
        button.textContent = "Supprimer les paragraphes";
        button.addEventListener('click', function () {
            let paragraphe = document.getElementsByTagName("p");
            for (let index = 0; index < paragraphe.length; index++) {
                paragraphe[index].parentNode.removeChild(paragraphe[index]);
                //ou
                // paragraphe[index].remove();
            }
        });
    }
}
var win = document.defaultView;

/////////////////////////------P1----////////////////////////////////////////
var p = document.getElementsByTagName("p");

/*for (var i = 0; i < p.length; i++) {
     p[i].addEventListener("mouseleave", function (event) {
         // on cible la cible de mouseleave
         event.target.style.color = "purple";
         console.log("x = " + event.x + " mouseleave");
         console.log("y = " + event.y + " mouseleave");
         if (event.x < win.innerWidth / 2) {
             console.log("GAUCHE");
         } else {
             console.log("DROITE");
         }
     });
 
     p[i].addEventListener("mouseout", function (event) {
         // on cible la cible de mouseout
         event.target.style.color = "orange";
         console.log("x = " + event.x + " mouseout");
         console.log("y = " + event.y + " mouseout");
         if (event.x < win.innerWidth / 2) {
             console.log("GAUCHE");
         } else {
             console.log("DROITE");
         }
     });
}*/
/////////////////////////------P2------//////////////////////////////////////
var p2 = document.querySelector('p');

p2.addEventListener("mouseover", function (event) {
    p2.classList.toggle("text-red", event.x > win.innerWidth / 2);
});

p2.addEventListener("mouseout", function (event) {
    p2.classList.add("text-red");
});

/////////////////////////-------P3----//////////////////////////////////////
document.getElementById('title-1').addEventListener("click", function (event) {
    var p3 = document.createElement("p");
    document.body.appendChild(p3);
    p3.className = "text-red";
    p3.innerText = "Ajout d'un élément de paragraphe avec la classe CSS text-red avec les events (mouseover et mouseout) à chaque nouvel élément créé";
    p3.addEventListener("mouseover", function (event) {
        p3.classList.toggle("text-red", event.x > win.innerWidth / 2);
    });

    p3.addEventListener("mouseout", function (event) {
        p3.classList.add("text-red");
    });
});
