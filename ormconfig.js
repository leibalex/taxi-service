module.exports = {
  type: "postgres",
  url: process.env.DB_URL,
  logging: process.env.DB_LOGGING === "true",
  keepConnectionAlive: false,
  migrations: ["src/migrations/*{.ts,.js}"],
  entities: ["src/entities/*.ts"]
};
