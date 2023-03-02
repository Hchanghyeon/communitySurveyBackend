import { Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('Surveys')
export class Surveys {
    @PrimaryGeneratedColumn() // 게시글 번호
    id:number; 

    @Column({length:60}) // 제목
    header:string;

    @Column({type: 'simple-array',length:60}) // 콘텐츠
    contents:string[];

    @CreateDateColumn() // 계정 생성 시각
    createdAt:Date;
}
