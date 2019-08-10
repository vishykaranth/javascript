const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function(){
        console.log('Listener called');
    }
);
//
////Raise an event
//emitter.emit('messageLogged');
//
////Register a listener
//emitter.on('messageLogged2', (arg) => {
//        console.log('Listener called', arg);
//    }
//);
//
////Raise an event
//emitter.emit('messageLogged2', {id:1, url:'http://'});

const log = require('./logger');
log('message');
