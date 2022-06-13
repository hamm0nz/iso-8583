var ISO8583 = require('iso-8583');
var message = new ISO8583.Message();
var data = "1234D020000002C000000000000000000008161234567890123456000000005699000234000431323334352020203637383930313233342020202020200009424C414820424C4148";
var msg = new Buffer(data, "hex");
var len = msg.length;
var unpackedMessage = message.unpackSync(msg, len);
console.log(unpackedMessage);
