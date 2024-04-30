import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.POSTGRES_PASSWORD);
export default {
    pgUser: process.env.POSTGRES_User,
    pgPassword: process.env.POSTGRES_PASSWORD,
    pgHost: process.env.POSTGRES_HOST,
    pgDatabase: process.env.POSTGRES_DB,
    pgPort: process.env.POSTGRES_PORT,
    bingKey: process.env.BING_KEY,
};
//# sourceMappingURL=keys.js.map