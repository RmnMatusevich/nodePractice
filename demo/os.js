const os = require('os');

console.log("Operation system: " + os.platform());

console.log("Process architecture: " + os.arch());

console.log("Processors information: " + os.cpus());

console.log("Free memory: " + os.freemem());

console.log("All memory: " + os.totalmem());

console.log("Home directory: " + os.homedir());

console.log("Time: " + os.uptime());