import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersTestData1589219860737 implements MigrationInterface {
    name = 'OrdersTestData1589219860737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA1', 'улица Прикольная 11', '2020-05-11T19:49:01.606Z', '2020-05-11T19:54:01.606Z', 250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA2', 'улица Прикольная 11', '2020-05-11T19:39:01.606Z', '2020-05-11T19:44:01.606Z', 350, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA3', 'улица Прикольная 11', '2020-05-11T19:29:01.606Z', '2020-05-11T19:54:01.606Z', 1250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA4', 'улица Прикольная 11', '2020-05-11T19:19:01.606Z', '2020-05-11T19:54:01.606Z', 3445, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA5', 'улица Прикольная 11', '2020-05-11T19:49:01.606Z', '2020-05-11T19:57:01.606Z', 250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA6', 'улица Прикольная 11', '2020-05-11T18:49:01.606Z', '2020-05-11T19:54:01.606Z', 6250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA7', 'улица Прикольная 17', '2020-05-11T19:49:01.606Z', '2020-05-11T19:54:01.606Z', 250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA8', 'улица Прикольная 17', '2020-05-11T19:49:01.606Z', '2020-05-11T19:54:01.606Z', 250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
        await queryRunner.query(`INSERT INTO "order" (boarding_address, destination_address, boarding_date, destination_date, cost, 
        status, driver_id, client_id) 
        VALUES ('BA11', 'улица Прикольная 22', '2020-05-11T19:49:01.606Z', '2020-05-11T19:54:01.606Z', 250, 'finish', 'ee306988-0977-49b0-9400-15df8474236a',
        '144c5fe3-8e2b-426c-967d-f9633efcdb01')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM public.order`);
    }

}
