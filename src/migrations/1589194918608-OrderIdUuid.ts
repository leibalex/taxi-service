import {MigrationInterface, QueryRunner} from "typeorm";

export class OrderIdUuid1589194918608 implements MigrationInterface {
    name = 'OrderIdUuid1589194918608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")`, undefined);
    }

}
