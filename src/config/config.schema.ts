
export const configSchema = {
  type: "object",
  additionalFields: true,
  properties: {
    NODE_ENV: {
      enum: ["development", "production", "staging"],
      type: "string"
    },
    DB_URL: {
      type: "string"
    },
    DB_LOGGING: {
      type: "string",
      enum: ["true", "false"]
    },
    REDIS_URL: {
      type: "string"
    },
    SERVER_PORT: {
      type: "string",
      pattern: "^[0-9]+$"
    },
    GLOBAL_API_PREFIX: {
      type: "string"
    },
    APP_VERSION: {
      type: "string"
    }
  },
  required: [
    "NODE_ENV",
    "DB_URL",
    "APP_VERSION"
  ]
};
