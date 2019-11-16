const Joi = require('@hapi/joi');
const db = require('@services/DatabaseService');

module.exports = {
    method: 'GET',
    path: '/questions',
    config: {
        description: 'Get all questions',
        tags: ['api'],
        response: {schema: Joi.object({status: Joi.boolean(), data: Joi.any()})},
        handler: async (request, h) => {
            let q;
            try {
                q = await db.questions;
            } catch (err) {
                console.log(err)
            }
            return {status: true, data: q};
        }
    }
};
