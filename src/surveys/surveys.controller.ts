import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveysService } from './surveys.service';

@Controller('surveys')
export class SurveysController {
    constructor(private readonly surveysService:SurveysService){}

    // 설문 생성
    @Post("/create")
    async createSurvey(@Body() createSurveyDto:CreateSurveyDto){
        return await this.surveysService.createSurvey(createSurveyDto);
    }

    // 설문 삭제
    @Get("/delete/:id")
    async deleteSurvey(@Param('id') id:string){
        return await this.surveysService.deleteSurvey(id);
    }

    // 설문 수정
    @Post("/update")
    async updateSurvey(@Body() updateSurveyDto:UpdateSurveyDto){
        return await this.surveysService.updateSurvey(updateSurveyDto);
    }

    // 설문 조회
    @Get("/search/:id")
    async searchSurvey(@Param('id') id:string):Promise<string>{
        return await this.surveysService.searchSurvey(id);
    }

}
