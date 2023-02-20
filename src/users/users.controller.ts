import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersSerivce:UsersService){}

    // 유저 생성
    @Post("/create")
    async createUser(@Body() createUserDto:CreateUserDto){
        return await this.usersSerivce.createUser;
    }

    // 유저 삭제
    @Post("/delete")
    async deleteUser(@Body('email') email:string){
        return await this.usersSerivce.deleteUser;
    }

    // 유저 수정
    @Post("/update")
    async updateUser(@Body() updateUserDto:UpdateUserDto){
        return await this.usersSerivce.updateUser;
    }

    // 유저 조회
    @Post("/search")
    async searchUser(@Body('email') email:string){
        return await this.usersSerivce.searchUser;
    }

}
