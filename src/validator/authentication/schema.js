const Joi = require('joi');

// method ini digunakan untuk memvalidasi inputan user
// saat menambahkan item ke keranjang
const RegisterPayloadSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});

// method ini digunakan untuk memvalidasi inputan user
// saat mengubah jumlah quantity item di keranjang
const LoginPayloadSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { RegisterPayloadSchema, LoginPayloadSchema };