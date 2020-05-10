import {MigrationInterface, QueryRunner} from "typeorm";

export class AddOrderStatus1589120315846 implements MigrationInterface {
    name = 'AddOrderStatus1589120315846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "order_status_enum" AS ENUM('new', 'inWay', 'finish')`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "status" "order_status_enum" NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "status"`, undefined);
        await queryRunner.query(`DROP TYPE "order_status_enum"`, undefined);
    }

}
