function getUniqueObjects(profiles) {
    try {
        let profileIDSet = new Set();
        const nextProfileList = [...new Set(profiles.filter(profile => {
            if (!profileIDSet.has(profile.id)) {
                profileIDSet.add(profile.id);
                return profile;
            }
        }))];
        return nextProfileList;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getUniqueObjects
}