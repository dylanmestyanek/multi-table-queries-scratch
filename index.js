const server = require("./server");

const port = process.env.PORT || 4000; 

server.listen(port, () => console.log(`\n*** Yeehaw! Server is listening on ${port}! ***\n`))