import { Module } from '@nestjs/common';
import { SurveysEntity } from './entities/surveys.entity';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([SurveysEntity])],
  controllers: [SurveysController],
  providers:[SurveysService]
})
export class SurveysModule {}
