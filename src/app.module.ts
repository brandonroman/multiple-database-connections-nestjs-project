import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnADefault } from './entities/conn-a-default.entity';
import { ConnBDefault } from './entities/conn-b-default.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConnADefault], 'CONN-A'),
    TypeOrmModule.forFeature([ConnBDefault], 'CONN-B'),
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
