import {Column, Model, Table, DataType} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreateAttrs {
    email: string;
    password: string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreateAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный индефикатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@test.dev', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Блокировака пользователя по умодчанию FALSE'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    bannned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}