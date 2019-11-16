const Joi = require('@hapi/joi');

module.exports = {
    method: 'GET',
    path: '/user/{user_id}',
    config: {
        description: 'Get a user with specific id',
        tags: ['api'],
        response: {schema: Joi.object({status: Joi.boolean(), data: Joi.any()})},
        handler: async (request, h) => {
            return true;
        }
    }
};
