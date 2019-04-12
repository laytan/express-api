import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table
export default class Todos extends Model<Todos> {
    @Column
    public name: string;

    @Column(DataType.TEXT)
    public description: string;

    @CreatedAt
    public createdAt: Date;

    @UpdatedAt
    public updatedAt: Date;
}
