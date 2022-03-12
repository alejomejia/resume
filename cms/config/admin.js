module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '955857c72ff5bd92c6559b4fb1bcbd24'),
  },
});
