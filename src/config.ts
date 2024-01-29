import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mssql1: {
      database: process.env.CONN_A_NAME,
      port: +process.env.CONN_A_PORT,
      password: process.env.CONN_A_PASSWORD,
      username: process.env.CONN_A_USER,
      host: process.env.CONN_A_HOST,
    },
    mssql2: {
      database: process.env.CONN_B_NAME,
      port: +process.env.CONN_B_PORT,
      password: process.env.CONN_B_PASSWORD,
      username: process.env.CONN_B_USER,
      host: process.env.CONN_B_HOST,
    },
  };
});
