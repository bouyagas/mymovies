const server = require('./server/server.js');
const port = process.argv[2] || process.env.Port || 3001;
server.listen(port, () => {
     console.log(`Up and running ${port} :)`);
});
