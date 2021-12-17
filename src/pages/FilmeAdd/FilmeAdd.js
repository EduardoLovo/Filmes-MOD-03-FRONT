import React from 'react';
import { Api } from '../../Api/Api';
import './FilmeAdd.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FilmeAdd = (props) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nome = e.target.nome.value;
        const imagem = e.target.imagem.value;

        const Filme = {
            nome: nome,
            img: imagem
        }


        try {
            const response = await Api.fetchPost(Filme);
            const data = response.text()
            console.log(data);
            props.history.push('/');
        } catch (error) {
            console.log('error:', error);
        }
    }

    const notify = () => toast('Filme adiciona com sucesso!')

    return (
        <section className='addBody'>
            <h1>Adicionar Novo Filme</h1>
            <form onSubmit={handleSubmit}>
                <input id='nome' name='nome' placeholder='Nome do Filme'></input>
                <input id='imagem' name='imagem' placeholder='Url da Imagem'></input>
                <button type='submit' onClick={notify}>Enviar</button>
                <ToastContainer />
            </form>
        </section>
    )
}
