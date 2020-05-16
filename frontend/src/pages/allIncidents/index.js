import React, { useState, useEffect, } from 'react';
import { Link, } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import CommonIncidents from '../../components/incidents/commonIncident';

import './styles.css';

import strings from '../../strings';

export default function AllIncidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    // get data to show on view
    useEffect(() => {
        api.get(`incidents?page=${currentPage}`).then((response) => {
            setIncidents(response.data.incidents);
            setTotal(response.data.totalOfIncidents);
        });
    }, [currentPage]);

    function changePage(type) {
        if (type === "next") {
            // TODO validate
            setCurrentPage(currentPage + 1);
        }
        else {
            if (currentPage === 0) {
                return;
            }
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />

                <span className="gray">{strings.incidents} {total}</span>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                        {strings.backToHome}
                </Link>

            </header>

            <h1>{strings.welcome}</h1>

            <p className="well-come gray">
                {strings.subtitle}
            </p>

            <CommonIncidents
                incidents={incidents}
            />

            <footer className='pagination'>
                <button onClick={() => changePage("back")}>
                    <FiArrowLeft size={32} />
                </button>
                <button onClick={() => changePage("next")}>
                    <FiArrowRight size={32} />
                </button>
            </footer>
        </div>
    );
}
