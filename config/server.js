module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: {
    enabled: true,
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2c55b95de667f13edc2bf730ccc871b8"),
    },
  },
});
