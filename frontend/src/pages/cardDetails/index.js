import React, { useEffect, useState } from 'react';

import './style.css';
import api from '../../services/api';

import strings from '../../strings';

export default function CardDetails(props) {

    // get card id from url (react router dom)
    const { incident_id } = props.match.params;
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        api.get(`incident/${incident_id}`).then((response) => {
            setSelectedCard(response.data.incident);
        });
    }, [incident_id]);


    return (
        <>
            {selectedCard &&
                <>
                    <div className="card">
                        <strong>{strings.case}</strong>
                        <p>{selectedCard.title}</p>

                        <strong>{strings.description}</strong>
                        {selectedCard.description.split("\n").map(p => {
                            return <p>{p}</p>
                        })}


                        <strong>{strings.value}</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(selectedCard.value)}</p>
                    </div>

                    <div className="card">
                        <h1>{strings.saveTheDay}</h1>
                        <h1>{strings.saveTheDay2}</h1>

                        <span className='gray'>{strings.getInTouch}</span>

                        <div>
                            <button className='button'>WhatsApp: {selectedCard.whatsapp}</button>
                            <button className='button'>E-mail: {selectedCard.email}</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}