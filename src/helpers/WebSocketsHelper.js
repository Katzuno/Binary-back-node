const Nes = require('@hapi/nes');
const axios = require('axios');

const checkFace = img => {
    return axios.post('http://46.101.195.188:5000/api/face', {img_url: img}).then(res => {
        return res.data;
    });
}

const onMessage = async (socket, msg) => {
    const requestData = {
        base64img: msg.image.split(',')[1],
        height: msg.height,
        width: msg.width
    }
    const res = (await axios.post('http://46.101.195.188:5000/api/analyse', requestData)).data;

    const resFace = await checkFace(requestData.base64img);
    if (!resFace.error)
        await socket.send({type: 'face', data: resFace});

    await socket.send({type: 'imageData', data: res});

    return true;
};

module.exports = {plugin: Nes, options: {onMessage}};
