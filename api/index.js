const app = require('./src/app');
const db = require('./src/db');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`)
})