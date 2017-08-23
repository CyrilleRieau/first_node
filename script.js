const fs = require('fs');
fs.writeFileSync("tata.txt", "Salut tata !");

fs.writeFile("toto.txt", "Salut toto !", function(err) {
    if (err) throw err;
    console.log("Fichier créé!");
});

let files = fs.readdirSync("./");
for (let i in files) {
    console.log(files[i]);
};