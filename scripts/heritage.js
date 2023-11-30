class Utilisateurheritage {
    //Construicteur : C'est une fonction qui implemente les proprietés d'un object
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

//Heritage des proprietés et des fonctions
class Admin extends Utilisateurheritage {
    //methode accessible uniquement aux admins
    supprimerUtilisateurs(util){
        utilisateursheritage = utilisateursheritage.filter(utilisateur => {
            return utilisateur.email != util.email;
        });
    }
}

const util1heritage = new Utilisateurheritage('Musole Louis', 'musole@gmail.com', 'Charle');7
const util2heritage = new Utilisateurheritage('Blaise Toin',  'blaise@gmail.com', 'Gloria', 'Juice');
const admin = new Admin('Chance Key', 'chance@gmail.com', 'Jonathan', 'Moise');

let utilisateursheritage = [util1heritage, util2heritage, admin];
console.log(utilisateursheritage);

admin.supprimerUtilisateurs(util1heritage);
console.log(utilisateursheritage);