import React from 'react';
import { FiArrowRight } from "react-icons/fi";

import './styles.css';
import { Link } from 'react-router-dom';

/**
 * Show incidents without delete option
 */
export default function CommonIncidents(props) {

    const {incidents} = props;

    return (
        <>
            <ul className='list-of-incidents'>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(incident.value)}</p>

                        <Link to="/card_details">
                            <div className="card-details">
                                <span>Ver mais detalhes</span>
                                <FiArrowRight size={16}/>
                            </div>
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    )
}