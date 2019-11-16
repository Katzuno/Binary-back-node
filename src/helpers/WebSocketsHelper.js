const Nes = require('@hapi/nes');

const onMessage = async (socket, msg) => {
    // console.log(msg);
    // await socket.server.publish('/room/' + msg.id, msg);
    console.log(msg);
    return true;
};

module.exports = {plugin: Nes, options: {onMessage}};
