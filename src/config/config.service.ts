import * as dotenv from "dotenv";
import * as Ajv from "ajv";
import { configSchema } from "./config.schema";
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as entities from "../entities";

@Injectable()
export class ConfigService {
  private readonly _envConfig: Record<string, string>;

  constructor() {
    const { parsed } = dotenv.config();
    this._envConfig = {
      ...parsed,
      ...process.env
    };

    this._validateConfig();
  }

  private _validateConfig(): void {
    const ajv = new Ajv();

    if (!ajv.validate(configSchema, this._envConfig)) {
      throw new Error(`Config validation error: ${ajv.errorsText()}`);
    }
  }

  public get serverPort(): number {
    return Number(this._envConfig["SERVER_PORT"]) || 3000;
  }

  public get dbURL(): string {
    return this._envConfig["DB_URL"];
  }

  public get dbLogging(): boolean {
    return this._envConfig["DB_LOGGING"] === "true";
  }

  public get globalApiPrefix(): string {
    return this._envConfig["GLOBAL_API_PREFIX"] || "api";
  }

  public get nodeEnv(): string {
    return this._envConfig["NODE_ENV"];
  }

  public get appVersion(): string {
    return this._envConfig["APP_VERSION"];
  }

  public get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      url: this.dbURL,
      logging: this.dbLogging,
      keepConnectionAlive: false,
      entities: [...Object.values(entities)],
      synchronize: false,
      migrationsRun: false
    };
  }
}
