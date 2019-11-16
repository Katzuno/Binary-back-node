const Nes = require('@hapi/nes');
const axios = require('axios');

const onMessage = async (socket, msg) => {
    // console.log(msg);
    // await socket.server.publish('/room/' + msg.id, msg);
    // console.log('img', msg);
    const res = (await axios.post('http://46.101.195.188:5000/api/analyse', {base64img: msg.split(',')[1]})).data;
    // console.log(res)
    await socket.send({type: 'imageData', data: res});
    // console.log('sent msg')
    return true;
};

module.exports = {plugin: Nes, options: {onMessage}};
