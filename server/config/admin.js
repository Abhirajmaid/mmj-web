module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1HNzzvfYBGCtjm8a+bfv/A=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','JriL6fuTfj+BYuEalrSBDg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'CM1jhRPL+hd0kQrSFwI+ng=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
