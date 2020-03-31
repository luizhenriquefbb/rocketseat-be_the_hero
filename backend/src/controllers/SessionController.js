const connection = require('../database/connection');

module.exports = {
    store: async (req, res) => {
        const { id, } = req.body;

        const ngo = await connection('ngos')
            .where('id', id)
            .select('name')
            .first();

        if (!ngo) {
            return res.status(400).json({ msg: 'no NGO found with this ID', });
        }


        return res.json({ msg: 'NGO found', ngo, });
    },

};
