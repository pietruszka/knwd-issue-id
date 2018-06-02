const IS_PROD = false//(process.env.NODE_ENV === "production");
const IS_TEST_MODE = true//(process.env.TEST_MODE === "true");

const CONFIG = {
    PORT: process.env.PORT || 3000,//(IS_PROD) ? process.env.INSTUDY_PORT : 3000,
    DB_URL: ((IS_PROD) ? process.env.DB_URL : "mongodb://ds245715.mlab.com:45715/hack"),
    DB_URL_AUTH: {
        PASSWORD: "admin",
        USER: "admin",
    },
};

module.exports = CONFIG;