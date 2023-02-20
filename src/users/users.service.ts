import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
        // 유저 생성
        async createUser(createUserDto:CreateUserDto){
            return "success create user";
        }
    
        // 유저 삭제
        async deleteUser(email:string){
            return "success delete user";
        }
    
        // 유저 수정
        async updateUser(updateUserDto:UpdateUserDto){
            return "success update user";
        }
    
        // 유저 조회
        async searchUser(email:string){
            return `searched ${email} user`;
        }
}
