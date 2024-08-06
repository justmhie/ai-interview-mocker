/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:1hC4zybmWHBx@ep-morning-union-a185ojax.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
  };