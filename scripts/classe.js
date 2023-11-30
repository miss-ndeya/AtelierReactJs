//Classe : c'est une maquette (model) pour créer des objects
class UtilisateurClass {
  //Construicteur : C'est une fonction qui implemente les proprietés d'un object
  constructor(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
  }
  login() {
    console.log(`${this.email} est connecté(e)`);
  }
  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  }
}

const util1Class = new UtilisateurClass(
  "Musole Louis",
  "musole@gmail.com",
  "Alice",
  "Grace"
);
const util2Class = new UtilisateurClass(
  "Blaise Huu",
  "blaise@gmail.com",
  "Jonathan"
);
console.log(util1Class);
console.log(util2Class);

util1Class.login();
util1Class.logout();

util2Class.login();
util2Class.logout();
