const express = require('express');

const routes = new express.Router();
const NGOController = require('./controllers/NgosController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// hello word
routes.post('/hello_world', (req, res) => res.json({
    ok: 'Hello world',
    body: req.body,
    headers: req.headers,
    params: req.params,
}));

// hello word
routes.get('/hello_world', (_, res) => res.json({
    ok: 'Hello world',
}));


routes.post('/login', SessionController.store);

// create new NGO
routes.post('/ngo', NGOController.store);

// list all NGOs
routes.get('/ngos', NGOController.list);

// create new incident
routes.post('/incident', IncidentController.store);

// list all incidents
routes.get('/incidents', IncidentController.list);

// list incident by id
routes.get('/incident/:incidentId', IncidentController.index);

// delete an incident
routes.delete('/incident/:incidentId', IncidentController.delete);

// list incidents of logged ngo
routes.get('/profile', ProfileController.list);


module.exports = routes;
