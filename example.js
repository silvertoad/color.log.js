var log = require('./color-log.js');
console.log("without");
log.info('you read this');
log.mark('you read this better');
log.warn('we require more vespene gas');
log.error('houston we have a problem');

var slow = 'slow';
slowpoke_say();
function slowpoke_say()
{
    slow = slow.replace('o', 'oo');
    log.single.info("slowpoke say:", slow);
    setTimeout(slowpoke_say, 500);
}