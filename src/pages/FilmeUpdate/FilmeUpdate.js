import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../../Api/Api';

export const FilmeUpdate = (props) => {
    const id = props.match.params.id;

    const [filmeAtualizado, setFilmeAtualizado] = useState([]);

    useEffect(() => {
        getFilmeById();
    }, [])

    const getFilmeById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setFilmeAtualizado(data);

    }

    const handleFilmeAtualizado = (e) => {
        const filmeEdit = { ...filmeAtualizado };
        filmeEdit[e.target.name] = e.target.value;
        setFilmeAtualizado(filmeEdit);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await Api.fetchPut(filmeAtualizado, id);
        const response = await result.text();
        console.log(response);
    }


    const notify = () => toast('Filme atualizado com sucesso!')

    return (
        <section className='addBody'>
            <h1>Atualizar Filme</h1>
            <form onSubmit={handleSubmit}>
                <input id='nome'
                    name='nome'
                    label='nome'
                    defaultValue={filmeAtualizado.nome}
                    onChange={handleFilmeAtualizado}
                    placeholder='Nome do Filme'>
                </input>
                <input id='imagem'
                    name='imagem'
                    defaultValue={filmeAtualizado.img}
                    onChange={handleFilmeAtualizado}
                    placeholder='Url da Imagem'>
                </input>
                <button type='submit' onClick={notify}>Atualizar</button>
                <ToastContainer />
            </form>
        </section >
    )
}
