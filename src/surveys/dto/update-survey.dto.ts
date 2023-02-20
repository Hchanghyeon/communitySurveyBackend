import { IsString, MaxLength, MinLength, Matches, IsEmail, IsDate, Length } from "class-validator";

export class UpdateSurveyDto {
    @IsString()
    @MinLength(10)
    @MaxLength(20)
    readonly header:string; // 계정 이름

    @IsString()
    @MaxLength(60)
    readonly contents: []; // 이메일 
}
