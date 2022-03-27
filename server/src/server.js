const app = require('./app');
require('dotenv').config({ path: './.env' });

app.listen(process.env.SERVER_PORT, function () {
    console.log('Server running on port ' + process.env.SERVER_PORT)
});