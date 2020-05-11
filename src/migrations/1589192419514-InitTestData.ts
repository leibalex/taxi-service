import {MigrationInterface, QueryRunner} from "typeorm";

export class InitTestData1589192419514 implements MigrationInterface {
    name = 'InitTestData1589192419514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO client (id) VALUES ('a4edc5cb-6878-4cbb-9f07-37330bff878c')`, undefined);
        await queryRunner.query(`INSERT INTO client (id) VALUES ('75627d63-794b-415f-8ee5-7f2a144c6f86')`, undefined);
        await queryRunner.query(`INSERT INTO client (id) VALUES ('9b8128e5-7a69-4e3d-9ce3-8f9aee794f83')`, undefined);
        await queryRunner.query(`INSERT INTO client (id) VALUES ('1da85814-9dc3-43cc-96bb-4c60e84998b4')`, undefined);
        await queryRunner.query(`INSERT INTO client (id) VALUES ('144c5fe3-8e2b-426c-967d-f9633efcdb01')`, undefined);


        await queryRunner.query(`INSERT INTO driver (id, status) VALUES ('ee306988-0977-49b0-9400-15df8474236a', 'free')`, undefined);
        await queryRunner.query(`INSERT INTO driver (id, status) VALUES ('18c8950c-ea13-4382-b1a9-0a5cbe852055', 'free')`, undefined);
        await queryRunner.query(`INSERT INTO driver (id, status) VALUES ('8d55efba-211d-4e70-bfd7-0f395244c113', 'busy')`, undefined);
        await queryRunner.query(`INSERT INTO driver (id, status) VALUES ('31a8388e-025e-4d2d-8c6c-06c68feb192b', 'busy')`, undefined);
        await queryRunner.query(`INSERT INTO driver (id, status) VALUES ('022f8396-9455-420d-b490-31ec5653b3b0', 'free')`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM client`, undefined);
        await queryRunner.query(`DELETE FROM driver`, undefined);
    }

}
