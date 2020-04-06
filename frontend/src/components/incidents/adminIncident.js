import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

/**
 * Show cards with option to delete a card
 *
 */
export default function AdminIncidents(props) {

    const {incidents, handleDeleteIncident} = props;

    return (
        <>
            <ul className='list-of-incidents'>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        {incident.description.split("\n").map(p => {
                            return <p>{p}</p>
                        })}

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}