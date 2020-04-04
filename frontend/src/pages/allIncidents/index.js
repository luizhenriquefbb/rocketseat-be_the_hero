import React, { useState, useEffect, } from 'react';
import { Link, } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import CommonIncidents from '../../components/incidents/commonIncident';

import './styles.css';

export default function AllIncidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    // get data to show on view
    useEffect(() => {
        api.get('incidents').then((response) => {
            setIncidents(response.data.incidents);
            setTotal(response.data.totalOfIncidents);
        });
    }, []);


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />

                <span className="gray">Total de incidents: {total}</span>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                </Link>

            </header>

            <h1>Bem vindo</h1>

            <p className="well-come gray">
                Escolha um dos casos abaixo e ajude a salvar o dia
            </p>

            <CommonIncidents
                incidents={incidents}
            />
        </div>
    );
}
