const req = new XMLHttpRequest();

var response;

var div, ul;

var pseudoText, profilAvatarImage, userNameText;

var url = new URL('https://api.github.com/users/Yok29');

function init() {
    div = document.getElementById("div1");
    ul = document.createElement('ul');
    req.open('GET', url, true);
    req.send();
    req.onreadystatechange = function (event) {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                console.log("Réponse reçu: %s", this.responseText);
                response = JSON.parse(req.responseText);

                pseudoText = document.createElement('h1');
                pseudoText.textContent = response['login'];

                profilAvatarImage = document.createElement('img');
                profilAvatarImage.src = response['avatar_url'];

                profilAvatarImage.addEventListener("click", function () {
                    // window.open("appels_reseaux2.html", "_blank");
                    window.location = `appels_reseaux2.html?name=${response['login']}`;
                });

                userNameText = document.createElement('h2');
                userNameText.textContent = response['name'] != null ? response['name'] : "aucun nom existant";

                div.append(ul);
                ul.append(profilAvatarImage, pseudoText, userNameText);
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

}