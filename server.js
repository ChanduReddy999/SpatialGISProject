const server = require('./express')();
const { port = 3500 } = require('./config');


server.listen(port, async() => {
    console.log(`server is running at : http://localhost:${port}`);
});

