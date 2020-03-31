const connection = require('../database/connection');

module.exports = {

    list: async (req, res) => {
        // logged ngo
        const ngoId = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ngo_id', ngoId)
            .select('*');

        return res.json({
            msg: 'list of incidents',
            incidents,
        });
    },


};
