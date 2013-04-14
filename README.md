colorable log for node.js
============

## Installation

    npm install color-log
    
## supported styles

- info
- mark
- warn
- error

## usage

``` js
var log = require('color-log');
log.info('you read this');
log.mark('you read this better');
log.warn('we require more vespene gas');
log.error('houston we have a problem');
```

## support single line update

``` js
var slow = 'slow';
slowpoke_say();
function slowpoke_say()
{
    slow = slow.replace('o', 'oo');
    log.single.info("slowpoke say:", slow);
    setTimeout(slowpoke_say, 500);
}
```
## example

<img src="http://i.imgur.com/JRs6jQX.png" border = "0"/>
