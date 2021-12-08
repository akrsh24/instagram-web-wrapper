const Instagram = require('instagram-web-api');
require('dotenv').config();

const { USERNAME, PASSWORD } = process.env;
const client = new Instagram({ username: '*****', password: '****' });   // add username and password

async function fetchProfileChainData(userId) {
    console.log("Searching for userID =>", userId);
    try {
        await client.login();
        const profile = await client.getChainsData({ userId });
        return profile;
        // return profile.slice(0, 2);   // splice(0, number of profiles to fetch in each)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    fetchProfileChainData
}
