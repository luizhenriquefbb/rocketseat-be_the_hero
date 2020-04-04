import React, { useState, useEffect, } from 'react';
import { Link, useHistory, } from 'react-router-dom';
import { FiPower, } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import AdminIncidents from '../../components/incidents/adminIncident';

import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ngoId = localStorage.getItem('ngoId');
    const ngoName = localStorage.getItem('ngoName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId,
            },
        }).then((response) => {
            setIncidents(response.data.incidents);
        });
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incident/${id}`, {
                headers: {
                    Authorization: ngoId,
                },
            });

            setIncidents(incidents.filter((incident) => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />

                <span>Bem vinda, {ngoName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <AdminIncidents
                incidents={incidents}
                handleDeleteIncident={handleDeleteIncident}
            />
        </div>
    );
}
