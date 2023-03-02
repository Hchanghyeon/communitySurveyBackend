import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/users.entitiy';
import { SurveysModule } from './surveys/surveys.module';
import { SurveysEntity } from './surveys/entities/surveys.entity';

@Module({
  imports: [
    UsersModule, // 유저 모듈 
    SurveysModule, // 조사 모듈
    ConfigModule.forRoot({ // 동적 모듈
    envFilePath:[`${__dirname}/config/env/.${process.env.NODE_ENV}.env`], // 파일 경로 설정
    isGlobal:true, // 전역 모듈로 동작하게 해서 어느 모듈에서나 쓸 수 있게 설정
    validationSchema
  }),
  TypeOrmModule.forRoot({ // TypeORM 연결 모듈
    type:'mysql',
    host:process.env.DB_HOST,
    port:33061,
    username:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    database:'test',
    entities:[Users, SurveysEntity],
    synchronize:process.env.DB_SYNCHRONIZE === 'true'
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
