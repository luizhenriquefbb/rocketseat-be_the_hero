const connection = require('../database/connection');

module.exports = {
    store: async (req, res) => {
        const {
            title, description, value,
        } = req.body;

        // eslint-disable-next-line camelcase
        const ngo_id = req.headers.authorization;

        // add to database
        const results = await connection('incidents').insert({
            title, description, value, ngo_id,
        });

        const resultId = results[0];

        return res.json({ msg: 'successfully added', newIncidentId: resultId, });
    },

    list: async (req, res) => {
        // pagination
        const { page = 1, } = req.query;

        const incidents = await connection('incidents')
            .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ngos.name',
                'ngos.email',
                'ngos.whatsapp',
                'ngos.city',
                'ngos.uf'
            ]);

        const [totalOfIncidents] = await connection('incidents')
            .count();

        return res.json({
            msg: 'list of incidents',
            incidents,
            totalOfIncidents: totalOfIncidents['count(*)'],
        });
    },

    delete: async (req, res) => {
        const { incidentId, } = req.params;

        // only the owner of incident can delete their incident
        // logged ngo
        const loggedNgoId = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', incidentId)
            .select('ngo_id')
            .first();

        if (incident.ngo_id !== loggedNgoId) {
            return res.status(401).json({ msg: 'operation not permitted', });
        }

        await connection('incidents')
            .where('id', incidentId)
            .delete();

        return res.json({ msg: 'successfully removed', });
    },

    index: async (req, res) => {
        const { incidentId } = req.params;

        const incidents = await connection('incidents')
            .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
            .limit(1)
            .select([
                'incidents.title',
                'incidents.description',
                'incidents.value',

                'ngos.name',
                'ngos.email',
                'ngos.whatsapp',
                'ngos.city',
                'ngos.uf'
            ])
            .where('incidents.id', incidentId);

        const incident = incidents[0];

        return res.json({
            incident,
        });
    },

};
