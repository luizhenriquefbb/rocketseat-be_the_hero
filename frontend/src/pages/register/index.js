import React, { useState, } from 'react';
import { Link, useHistory, } from 'react-router-dom';
import { FiArrowLeft, } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './styles.css';
import strings from '../../strings';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ngo', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>{strings.haveNoCredential}</h1>
                    <p> {strings.subtitle3} </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                            {strings.backToHome}
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <input
                            placeholder="UF"
                            style={{ width: 80, }}
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">{strings.submit}</button>
                </form>
            </div>
        </div>
    );
}
