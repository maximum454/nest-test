import {Column, Model, Table, DataType, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreateAttrs {
    value: string;
    description: string;
}

@Table({tableName:'roles'})
export class Role extends Model<Role, RoleCreateAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный индефикатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'admin', description: 'Уникальное значение роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}