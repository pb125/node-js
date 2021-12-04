const events=require('events');
const event = new events.EventEmitter();

event.on('click',()=>console.log('gwalior'));
event.emit('click')

event.on('click',(a)=>console.log(a));
event.emit('click','priyanshu')

event.on('click',(a , b)=>console.log(a + b));
event.emit('click', 4, 5);