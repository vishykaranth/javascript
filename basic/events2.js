const EventEmitter = require('events');

const Logger2 = require('./logger2');
const logger2 = new Logger2();

console.log(Logger2);

//Register a listener
logger2.on('messageLogged', (arg) => {
        console.log('Listener called', arg);
    }
);

logger.log('message');
