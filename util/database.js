import mysql from 'mysql2'

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'restapi-ecommerce',
    password: '',
})

export default conn;