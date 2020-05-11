import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDriverStatus1589146657137 implements MigrationInterface {
    name = 'AddDriverStatus1589146657137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "driver_status_enum" AS ENUM('free', 'busy')`, undefined);
        await queryRunner.query(`ALTER TABLE "driver" ADD "status" "driver_status_enum" NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "driver" DROP COLUMN "status"`, undefined);
        await queryRunner.query(`DROP TYPE "driver_status_enum"`, undefined);
    }

}
