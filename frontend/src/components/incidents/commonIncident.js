import React from 'react';

import './styles.css';

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

                    </li>
                ))}
            </ul>
        </>
    )
}