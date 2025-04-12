import pg from 'pg';

    const pool = new pg.Pool({
        connectionString: 'postgresql://renansousa-linux:renan260601gx@localhost:5432/nextjs_planets_app'
    });
    
    export { pool }