const { query } = require("../database")

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    static async findAll() {
        const result = await query(`SELECT * FROM customers;`)
        return result.rows.map((row) => new Customer(row))
    }
}