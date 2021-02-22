
type EnvironmentConfig = {
  port: string,
  mongodb: string
}

export default function environmentConfig (): EnvironmentConfig {
  let envConfig = {
    port: '',
    mongodb: ''
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      envConfig = {
        mongodb: process.env.MONGODB_URL_DEV,
        port: process.env.PORT,
      };
      break;

    default:
      envConfig = {
        mongodb: process.env.MONGODB_URL_DEV,
        port: process.env.PORT,
      };
      break;
  }

  return envConfig;
};



