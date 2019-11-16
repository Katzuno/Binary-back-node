const Nes = require('@hapi/nes');
const axios = require('axios');

const onMessage = async (socket, msg) => {
    const requestData = {
        base64img: msg.image.split(',')[1],
        height: msg.height
    }
    const res = (await axios.post('http://46.101.195.188:5000/api/analyse', requestData)).data;

    await socket.send({type: 'imageData', data: res});

    return true;
};

module.exports = {plugin: Nes, options: {onMessage}};
