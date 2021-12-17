import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import './FilmeView.css';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export const FilmeView = (props) => {
    const id = props.match.params.id

    const [filme, setFilme] = useState([]);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getFilmeById();
    }, [])


    const getFilmeById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setFilme(data);

    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await Api.fetchDelete(id);
        props.history.push('/');



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
                    <button className='btnExluir' onClick={onOpenModal}>Excluir</button>
                    <Modal open={open} onClose={onCloseModal} center>
                        <p className='modalText'>Tem certeza que deseja excluir?</p>
                        <div className='divBtnModal'>
                            <button className='btnSim' onClick={handleDelete}>Sim</button>
                            <button className='btnNao' onClick={onCloseModal}>Não</button>
                        </div>
                    </Modal>
                </div>
                <Link to='/'>
                    <button>Voltar</button>
                </Link>
            </div>
        </div>
    )
}
