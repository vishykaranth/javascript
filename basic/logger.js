const EventEmitter = require('events');

const emitter = new EventEmitter();

function log12(message){
    console.log(message);
    
    emitter.emit('messageLogged2', {id:1, url:'http://'});
}

module.exports = log12;