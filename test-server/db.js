const pirates = []
let lastInsertedPirateId = 0;
const roleId = {
    'Captain': 1,
    'Landlubber': 2,
    'Quartermaster': 3,
    'Pen-Spinner': 4
};

module.exports = {
    pirates,
    addPirate: (name, role) => {
        if (roleId[role]) {
            const pirate = {
                name,
                role,
                id: ++lastInsertedPirateId,
                role_id: roleId[role]
            };
            pirates.push(pirate);
            return pirate
        }
    }
};

module.exports.addPirate('Blackbeard', 'Captain');
module.exports.addPirate('Redbeard', 'Landlubber');
module.exports.addPirate('Graybeard', 'Quartermaster');