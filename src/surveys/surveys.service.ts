import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveysService {

    // 설문 생성
    async createSurvey(createSurveyDto:CreateSurveyDto){
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
