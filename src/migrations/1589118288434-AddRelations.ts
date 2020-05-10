import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelations1589118288434 implements MigrationInterface {
    name = 'AddRelations1589118288434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "driver_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "client_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_71e6299877e37f03f2a00527fff" FOREIGN KEY ("driver_id") REFERENCES "driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_a0d9cbb7f4a017bac3198dd8ca0" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_a0d9cbb7f4a017bac3198dd8ca0"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_71e6299877e37f03f2a00527fff"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "client_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "driver_id"`, undefined);
    }

}
