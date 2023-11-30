//Consctructor Function : maquette (model) pour la création des objects
function Utilisateurs(noms, email, ...amis) {
  this.noms = noms;
  this.email = email;
  this.amis = amis;
  this.login = function () {
    console.log(`${email} est connecté(e)`);
  };
  this.logout = function () {
    console.log(`${email} est déconnecté(e)`);
  };
}

//Une instance
util1 = new Utilisateurs("Musole Louis", "musole@gmail.com", "Dody", "Mira");
util2 = new Utilisateurs("Zack Mwikasa", "zack@gmail", "Job", "Charlie");
util3 = new Utilisateurs("Hilaire Guy", "guy@gmail.com", "Tarzan");
util4 = new Utilisateurs(
  "Jack Ma",
  "jack@gmail.com",
  "Elon Musk",
  "Bill Gates"
);
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);

//Accès aux methodes
util1.login();
util1.logout();
