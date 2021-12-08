const Instagram = require('instagram-web-api');
require('dotenv').config();

const client = new Instagram({ username: 'reactnodejs1992', password: 'Aniruddha@12' });

(async () => {
    try {
        const profile = await client.login();
        console.log(profile)
    } catch (error) {
        console.log(error);
    }
})();

// async function fetchProfileChainData(userId) {
//     try {
//         await client.login();
//         const profile = await client.getChainsData({ userId });
//         console.log(profile.slice(0, 2));
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchProfileChainData('6860189');