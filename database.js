function test() {
    let mysql = require('mysql');

    let con = mysql.createConnection({
        host: "localhost",
        user: "cyrille",
        password: "m0byl3tte",
        database: "first_db"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM small_doggo", function(err, result) {
            if (err) throw err;
            //console.log(result);

            console.log(result[i].name);
        });
    });
}
module.exports = test;