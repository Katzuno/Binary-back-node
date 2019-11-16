const Joi = require('@hapi/joi');
const db = require('@services/DatabaseService');

module.exports = {
    method: 'POST',
    path: '/response',
    config: {
        description: 'Add question',
        tags: ['api'],
        response: {schema: Joi.object({status: Joi.boolean(), data: Joi.any()})},
        handler: async (request, h) => {
            const responseData = request.payload;
            let q;
            try {
                q = await db.addResponse(responseData.question_id, responseData.response);
                if (q) {
                    request.server.eachSocket(async socket => {
                        socket.send({type: 'responses', data: q});
                    });
                }
            } catch (err) {
                console.log(err)
            }
            return {status: true, data: q};
        }
    }
};
