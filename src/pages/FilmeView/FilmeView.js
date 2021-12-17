import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import './FilmeView.css';


export const FilmeView = (props) => {
    const id = props.match.params.id

    const [filme, setFilme] = useState([]);

    useEffect(() => {
        getFilmeById();
    })


    const getFilmeById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setFilme(data);

    }

    return (
        <div className='viewBody'>
            <div className='viewImg'>
                <img src={filme.img} alt={filme.nome} />
            </div>
            <div className='viewName'>
                <p>{filme.nome}</p>
                <div>
                    <Link to={`/filme/update/${filme._id}`}>
                        <button className='btnEditar'>Editar</button>
                    </Link>
                    <button className='btnExluir'>Excluir</button>
                </div>
                <Link to='/'>
                    <button>Voltar</button>
                </Link>
            </div>
        </div>
    )
}
