import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';
import { ConfigType } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, database, password, port } =
          configService.mssql1;
        return {
          type: 'mssql',
          host,
          port,
          username,
          password,
          database,
          dropSchema: false,
          synchronize: true,
          autoLoadEntities: true,
          options: { trustServerCertificate: true },
        };
      },
      name: 'CONN-A',
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, database, password, port } =
          configService.mssql2;
        return {
          type: 'mssql',
          host,
          port,
          username,
          password,
          database,
          dropSchema: false,
          synchronize: true,
          autoLoadEntities: true,
          options: { trustServerCertificate: true },
        };
      },
      name: 'CONN-B',
    }),
  ],
})
export class DatabaseModule {}
