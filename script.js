window.addEventListener("DOMContentLoaded", (event) => {
    // Ce code s'exécute uniquement après que la page HTML est complètement chargée.

    let is_run = true; // Variable qui contrôle si l'horloge et le changement de couleur sont actifs

    init(); // On initialise les fonctionnalités

    function init(){
        // Gestion du clic sur le bouton pour mettre en pause ou relancer l'horloge
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run; // On inverse l'état (pause / play)

            // On ajoute ou retire une classe CSS "pause" pour changer l'apparence du bouton
            if ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class').replace(' pause', ''));
            } else {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class') + ' pause');
            }
        });

        // Boucle qui se répète toutes les secondes
        setInterval(function(){
            if(is_run){
                // On récupère l'heure actuelle et on l'affiche dans la page
                let oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());

                // On change la couleur de fond en fonction de l'heure actuelle
                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML, 
                    document.querySelector('#minutes').innerHTML, 
                    document.querySelector('#seconds').innerHTML
                );
            }
        }, 1000);
    }

    // Ajoute un zéro devant les nombres inférieurs à 10 pour l'affichage
    function adjustTimer(timer){
        return (timer < 10 ? '0'+timer : timer.toString());
    }

    // Génère une couleur RGB à partir de l'heure, des minutes et des secondes
    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(parseInt(x)/100 * 256) + "," + Math.floor(parseInt(y)/100 * 256) + "," + Math.floor(parseInt(z)/100 * 256) + ")";
    }
});
