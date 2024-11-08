//import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsEmail()
    email: string;
}

/*export class UpdateUserDto extends PartialType(CreateUserDto) {
}*/
export class UpdateUserDto {
    name: string;
    password: string;
    email: string;
}