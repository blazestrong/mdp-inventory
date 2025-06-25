import { createConnection } from 'mysql2'
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mdp_store'
})

db.connect((err) => {
  if (err) throw err
  console.log('MySQL Connected!')
})

export default db