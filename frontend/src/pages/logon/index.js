import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn, } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api'


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { id });

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', response.data.ngo.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }




    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID" onChange={(evt) => setId(evt.target.value)}/>

                    <button className="button" type="submit">Entrar</button>
                    <Link to="guest">
                        <button className="button help" type="button">Quero ajudar</button>
                    </Link>

                    <Link to="/register" className="go-to-login">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes img" className="bg-img"/>

        </div>
    );
}
