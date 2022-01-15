import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateItems1642081805081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "items",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                        isNullable:false
                    },
                    {
                        name: "ammount",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "unity",
                        type: "varchar",
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("items")
    }

}
