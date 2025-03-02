const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgresql://renansousa-linux:renan260601gx@localhost:5432/node_postgres"
})

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback)
}

module.exports = { query }