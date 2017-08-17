    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "localhost",
        user: "cyrille",
        password: "mdp",
        database: "first_db"
    });

    function getAllDoggos() {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query("SELECT * FROM small_doggo", function(err, result) {
                if (err) throw err;
                //console.log(result);

                let retour = result.map(function(valeur) {
                    return {
                        id: valeur.id,
                        name: valeur.name,
                        birthday: valeur.birthday,
                        race: valeur.race,
                        isGood: valeur.is_good
                    }
                });
            });
        });
        con.end();
    }

    module.exports = test;