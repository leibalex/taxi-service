import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1589110491565 implements MigrationInterface {
    name = 'Init1589110491565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "driver" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "boarding_address" text NOT NULL, "destination_address" text NOT NULL, "boarding_date" TIMESTAMP WITH TIME ZONE NOT NULL, "destination_date" TIMESTAMP WITH TIME ZONE NOT NULL, "cost" double precision NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`, undefined);
        await queryRunner.query(`DROP TABLE "driver"`, undefined);
        await queryRunner.query(`DROP TABLE "client"`, undefined);
    }

}
