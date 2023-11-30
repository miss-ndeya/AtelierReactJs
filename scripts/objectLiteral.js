//Object literal [Encapsulation]
const utilisateu = {
  noms: "Musole Louis",
  email: "musole@gmail.com",
  amis: ["Steven", "Jonathan"],
  login() {
    console.log(`${this.email} est connecté(e)`);
  },
  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  },
};

const utilisateur2 = {
  noms: "Jonathan Louis",
  email: "mue@gmail.com",
  amis: ["Steven", "Jonathan"],
  login() {
    console.log(`${this.email} est connecté(e)`);
  },
  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  },
};

console.log(utilisateur2);
console.log(utilisateu);

//Accès aux propriètés d'un object
console.log(utilisateu.noms);
console.log(utilisateu.email);

console.log(utilisateu["noms"]);
console.log(utilisateu["email"]);

utilisateu.noms = "Blaise King";
utilisateu["email"] = "blaise@gmail.com";
console.log(utilisateu);
