var cluster = require('cluster');

if (cluster.isMaster) {
    for (var i = 0; i < 4; i++) {
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function(id) {
        console.log('Running with ID : ' + cluster.workers[id].process.pid);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    require('./server.js');
}