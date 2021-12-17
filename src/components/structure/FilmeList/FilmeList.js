import React from 'react';
import './FilmeList.css';
import { FilmeCard } from '../FilmeCard/FilmeCard'
import { useEffect, useState } from 'react/cjs/react.development';
import { Api } from '../../../Api/Api';

export const FilmeList = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        getFilme();
    }, [])


    const getFilme = async () => {
        const response = await Api.fetchGet();
        const data = await response.json();
        setFilmes(data);
    }

    console.log(filmes);


    return (
        <div className='listBody'>
            {filmes.map((filme, index) => (
                <FilmeCard filme={filme} key={filme._id} />
            ))}

        </div>
    )
}
