import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './styles.css';

import strings from '../../strings';


export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ngoId = localStorage.getItem('ngoId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incident', data, {
                headers: {
                    Authorization: ngoId,
                }
            });

            history.push('/profile');
        } catch (err) {
            alert(strings.failNewCase);
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>{strings.newCase}</h1>
                    <p>{strings.subtitle2}</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                            {strings.backToHome}
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder={strings.titlePlaceHolder}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder={strings.description}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder={strings.value}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">{strings.submit}</button>
                </form>
            </div>
        </div>
    )
}