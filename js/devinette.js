/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var resultat = false;
var nbrEssais = 0;

while (resultat === false && nbrEssais === 6){
    var nbr = prompt("entré un nombre entre 1 et 100");
    nbr = parseInt(nbr);
    nbrEssais++;
 
    if (nbr < 1 || nbr > 100)
        alert("vous n'avez pas entré un nombre entre 1 et 100, veuiller recommencé");
    
    else if (nbrEssais === 6)
        alert("Vous avez perdu, le nombre était " + solution); 

    
    else if (nbr < solution)
        alert(nbr + " est trop petit");
    
    else if (nbr > solution)
        alert(nbr + " est trop grand");
    
    else if (nbr === solution && nbrEssais <= 6){
        alert("Bravo ! Vous aves trouver le nombre en " + nbrEssais + " essais la solution était " + solution);
        resultat = true;
    }
}