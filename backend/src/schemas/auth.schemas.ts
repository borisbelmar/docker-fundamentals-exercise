import Joi from 'joi'

export const authLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export const authRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi
    .string()
    .required()
    .min(8),
  firstName: Joi.string().required().min(3).max(30),
  lastName: Joi.string().required().min(3).max(30)
})
