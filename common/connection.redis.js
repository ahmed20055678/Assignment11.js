const { createClient } = require("redis");

const client = createClient({
    url: process.env.REDIS_URL
});

async function connectionDB() {
    try {
        await client.connect();
        console.log("Redis Connected Successfully...... 😎");
    } catch (error) {
        console.log("Redis Connected Failed...... 😥😥");
    }
}

module.exports = { connectionDB, client };