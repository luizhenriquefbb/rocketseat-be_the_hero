import React, { useEffect, useState } from 'react';

import './style.css';
import api from '../../services/api';

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
                        <strong>CASO:</strong>
                        <p>{selectedCard.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        {selectedCard.description.split("\n").map(p => {
                            return <p>{p}</p>
                        })}


                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(selectedCard.value)}</p>
                    </div>

                    <div className="card">
                        <h1>Salve o dia !!</h1>
                        <h1>Seja o herói desse caso.</h1>

                        <span className='gray'>Entre em contato</span>

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