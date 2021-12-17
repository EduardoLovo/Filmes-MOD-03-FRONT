import React from 'react';
import { Link } from 'react-router-dom';
import './FilmeCard.css';

export const FilmeCard = (props) => {
    const filme = props.filme
    return (
        <div className='cardBody'>
            <Link to={`/filme/findById/${filme._id}`} filme={filme} className='linkView'>
                <img src={filme.img} alt='capa' />
                <p>{filme.nome} </p>
            </Link>
        </div>

    )
}