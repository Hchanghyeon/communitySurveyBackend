import { IsString, MaxLength, MinLength, Matches, IsEmail, IsDate, Length } from "class-validator";

export class CreateSurveyDto {
    @IsString()
    @MaxLength(60)
    readonly header:string; // 제목

    @IsString()
    @MaxLength(60)
    readonly contents: string[]; // 콘텐츠
}
