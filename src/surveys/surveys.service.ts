import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveysEntity } from './entities/surveys.entity';

@Injectable()
export class SurveysService {
    constructor(@InjectRepository(SurveysEntity) private surveysRepository: Repository<SurveysEntity>){}

    // 설문 생성
    async createSurvey(createSurveyDto:CreateSurveyDto){
        console.log(createSurveyDto);
        const result = await this.surveysRepository.save(createSurveyDto);
        console.log(result);
        return "success create survey";
    }

    // 설문 삭제
    async deleteSurvey(id:string){
        return "success delete survey";
    }

    // 설문 수정
    async updateSurvey(updateSurveyDto:UpdateSurveyDto){
        return "success update survey";
    }

    // 설문 조회
    async searchSurvey(id:string){
        return `searched ${id} survey`;
    }

}
