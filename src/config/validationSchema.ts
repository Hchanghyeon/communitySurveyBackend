import * as Joi from 'joi';

export const validationSchema = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_SYNCHRONIZE: Joi.string().required()
})