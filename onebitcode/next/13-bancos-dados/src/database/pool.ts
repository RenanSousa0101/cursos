import pg from 'pg';

    const pool = new pg.Pool({
        connectionString: 'postgresql://x:x@localhost:5432/nextjs_planets_app'
    });
    
    export { pool }