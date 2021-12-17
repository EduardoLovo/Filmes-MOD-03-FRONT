import React from 'react';
import { Link } from 'react-router-dom';
import { FilmeList } from '../../components/structure/FilmeList/FilmeList';
import './Home.css';

export const Home = () => {

    return (
        <div className='container'>
            <h1>Meus Filmes</h1>
            <FilmeList />
            <Link to='/filme/add'>
                <button>Adicionar Novo Filme</button>
            </Link>
        </div>
    )
}
