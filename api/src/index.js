
const app = require('./app');

require('./connection');

const init = async () => {
    await app.listen(3000);
    console.log('Server on LocalHost: port 3000');
}

init();