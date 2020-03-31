const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    store: async (req, res) => {
        const {
            name, email, whatsapp, city, uf,
        } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        // add to database
        await connection('ngos').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json(
            {
                msg: 'successfully added',
                id,
            }
        );
    },

    list: async (req, res) => {
        // add to database
        const ngos = await connection('ngos').select('*');

        return res.json({
            msg: 'list of ngos',
            ngos,
        });
    },
};
