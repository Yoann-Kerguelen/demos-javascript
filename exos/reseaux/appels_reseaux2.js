const req = new XMLHttpRequest();

var response;

var div, ul;

var repoName, repoDesc;

function init() {

    var url0 = new URL(window.location);
    var name = url0.searchParams.get('name');

    var url = new URL('https://api.github.com/users/' + name + '/repos');


    div = document.getElementById("div1");
    ul = document.createElement('ul');
    req.open('GET', url, true);
    req.send();
    req.onreadystatechange = function (event) {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                console.log("Réponse reçu: %s %s", this.responseText, url);
                response = JSON.parse(req.responseText);

                repoName = document.createElement('h1');
                repoName.textContent = response[0]['full_name'] != null ? response[0]['full_name'] : "aucun repos existant";

                repoDesc = document.createElement('h2');
                repoDesc.textContent = response[0]['description'] != null ? response[0]['description'] : "aucune description existante";

                div.append(ul);
                ul.append(repoName, repoDesc);
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

}