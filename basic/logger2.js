const EventEmitter = require('events');

//const emitter = new EventEmitter();

class Logger2 extends EventEmitter{
    log2(message){
        console.log(message);
        this.emit('messageLogged', {id:1, url:'http://'});
    }    
}

module.exports = Logger2;