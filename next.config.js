module.exports = {
  env: {
    DB_LOCAL_URI: '',
    DB_URI:
      'mongodb+srv://saumit1234:saumit1234@bookitdb.rcmil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

    STRIPE_API_KEY:
      'pk_test_51KRG8lSDZZMdslsD0cyqsTkXaXwtzMsEx6R6pA5fmYHuHyHAEU0XRMpwucBlZbLdlur4hRuM5SvusJmFm6fLFIx900sA9E3XG6',
    STRIPE_SECRET_KEY:
      'sk_test_51KRG8lSDZZMdslsDtXralP7uHh9f120BdwOUCDOQy9R3Qw3StzTAEjEc3gqZzXhRViFaBuZXsdgjK6KkBDBlKP4a009nVxBZ8M',

    STRIPE_WEBHOOK_SECRET: 'whsec_8gqsd75gaFOwJxl9oc7GKaGcKfCTe19u',

    CLOUDINARY_CLOUD_NAME: 'bookitresources',
    CLOUDINARY_API_KEY: '981918627415477',
    CLOUDINARY_API_SECRET: 'MVhWatN45IrHGGDfLbkHDGfeoTk',

    SMTP_HOST: 'smtp.mailtrap.io',
    SMTP_PORT: '2525',
    SMTP_USER: 'eb0fd31745eafb',
    SMTP_PASSWORD: '1d44643be9b80f',
    SMTP_FROM_EMAIL: 'bookit@noreply.com',
    SMTP_FROM_NAME: 'Bookit',

    NEXTAUTH_URL: 'https://bookit-web.vercel.app',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
