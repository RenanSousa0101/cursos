const pg = require("pg");

// const db = new pg.Client({
//     host: "localhost",
//     port: 5432,
//     user: "renansousa-linux",
//     password: "renan260601gx",
//     database: "node_postgres"
// });

// Outra forma de se conectar ao banco
const db = new pg.Client({
    // Connection String: protocolo://usuario:senha@host:porta/nome_do_banco
    connectionString: "postgresql://renansousa-linux:renan260601gx@localhost:5432/node_postgres"
});

async function createTable() {
    await db.connect();

    const query = `
            CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                type VARCHAR(255)
            );
        `

    const result = await db.query(query);
    console.log(result);

    await db.end();
}


createTable();