const Joi = require('@hapi/joi');
const db = require('@services/DatabaseService');

module.exports = {
    method: 'POST',
    path: '/questions',
    config: {
        description: 'Add question',
        tags: ['api'],
        response: {schema: Joi.object({status: Joi.boolean(), data: Joi.any()})},
        handler: async (request, h) => {
            const questionData = request.payload;
            let q;
            try {
                q = await db.addQuestion(questionData);
            } catch (err) {
                console.log(err)
            }
            return {status: true, data: q};
        }
    }
};
