import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@test.dev', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    readonly password: string;
}