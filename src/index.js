const { getUniqueObjects } = require('./util/getUniqueObject');
const { fetchProfileChainData } = require('./modules/fetchProfileChainData');
const { writeToFile } = require('./util/writeToFile');

async function getProfilesForAProfile(profile) {
    let profileList = [];
    try {
        let nextProfileList = await fetchProfileChainData(profile.id);
        profileList = nextProfileList;
    } catch (error) {
        console.error(error);
    }
    return profileList;
}

async function subsequentProfiles(allProfiles, level) {
    let nextProfiles = allProfiles, totalProfiles = allProfiles;
    try {
        for (let temp = 0; temp < level; temp++) {
            let nextProfileList = [];
            for (let j = 0; j < nextProfiles.length; j++) {
                let data = await getProfilesForAProfile(nextProfiles[j]);
                nextProfileList.push(...data);
            }
            let uniqueProfileList = getUniqueObjects(nextProfileList);
            totalProfiles = getUniqueObjects(uniqueProfileList);
            nextProfiles = uniqueProfileList;
        }
        const IDsList = totalProfiles.map(obj => obj.id);
        writeToFile(totalProfiles, 'profiles.json');
        writeToFile(IDsList, 'id.txt');
    } catch (error) {
        console.error(er);
    }
}

//initial call
let profilesList = fetchProfileChainData('23818608');   //fetchProfileChainData(initialUserId)

//subsequent call
profilesList.then((profiles) => {
    let allProfiles = profiles; //pushed initial id profiles
    try {
        subsequentProfiles(allProfiles, 1);  //(allProfiles, depth of profiles needed)
    } catch (error) {
        console.error(error);
    }
});