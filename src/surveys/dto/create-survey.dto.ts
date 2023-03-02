import { IsString, MaxLength, MinLength, Matches, IsEmail, IsDate, Length, IsArray } from "class-validator";

export class CreateSurveyDto {
    @IsString()
    @MaxLength(60)
    readonly header:string; // 제목

    @IsArray()
    @IsString({each:true})
    @MaxLength(60, {each:true})
    readonly contents: string[]; // 콘텐츠
}
