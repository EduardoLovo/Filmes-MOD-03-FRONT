import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {

  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: "Matrix",
      img: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg"
    },
    {
      id: 2,
      nome: "Matrix 2",
      img: "https://img.elo7.com.br/product/original/26799E1/big-poster-filme-matrix-reloaded-lo02-tamanho-90x60-cm-matrix-revolutions.jpg"
    },
    {
      id: 3,
      nome: "Matrix 3",
      img: "https://i.ytimg.com/vi/s88XPCod3b0/movieposter_en.jpg"
    },
    {
      id: 4,
      nome: "Gravidade",
      img: "http://4.bp.blogspot.com/-Ik9qxDTgd3g/UmImHbJC6VI/AAAAAAAANcY/VJ7ckBFuG2g/s1600/gravity-movie-poster.jpg"
    },
    {
      id: 5,
      nome: "Interestelar",
      img: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg"
    },
    {
      id: 6,
      nome: "John Wick 3",
      img: "https://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg"
    }
  ]);

  // ===========================================================

  // ADICIONAR NOVO FILME
  const [nomeFilme, setNomeFilme] = useState("");
  const [imagemFilme, setImagemFilme] = useState("");
  const [editar, setEditar] = useState(false);
  const [indiceEditar, setIndiceEditar] = useState(null);

  const handleNomeChange = (e) => {
    console.log(e.target.value);
    setNomeFilme(e.target.value)
  }

  const handleImageChange = (e) => {
    setImagemFilme(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editar) {
      const filmesAtualizado = filmes.map((filme, indice) => {
        if (indiceEditar === indice) {
          filme.nome = nomeFilme;
          filme.img = imagemFilme;
        }
        return filme
      });
      setFilmes(filmesAtualizado);
      setEditar(false);
      setIndiceEditar(null);
      setNomeFilme('');
      setImagemFilme('');
    } else {
      setFilmes([
        ...filmes,
        {
          nome: nomeFilme,
          img: imagemFilme
        }
      ])
      setNomeFilme('');
      setImagemFilme('');
    }
  }


  const handleDelete = (indice) => {
    setFilmes(filmes.filter((filme, indiceFilme) => indice !== indiceFilme))
  };

  // ===========================================================

  // Editar Filme

  useEffect(() => {
    // Se estiver no indice e no modo editando entra no if
    if (indiceEditar !== null & editar) {
      setNomeFilme(filmes[indiceEditar].nome)
      setImagemFilme(filmes[indiceEditar].img)
    }
  }, [indiceEditar])


  return (
    <div className='container'>

      <h1>Meus Filmes</h1>
      <ul className='listFilmes'>
        {filmes.map((f, indice) => (
          <li key={indice}>
            <h3>{f.nome}</h3>
            <img src={f.img} alt={f.nome} />
            <button type="button" onClick={() => handleDelete(indice)}>Excluir</button>
            <button type="button" onClick={() => {
              setEditar(true);
              setIndiceEditar(indice);
            }}>Editar</button>
          </li>
        ))}
      </ul>


      <h2>Cadastrar novo filme</h2>

      <form className='formulario' onSubmit={handleSubmit}>

        <input placeholder='Digite o nome do filme'
          value={nomeFilme}
          onChange={handleNomeChange}
          type='text' />

        <input placeholder='Digite a url da imagem'
          value={imagemFilme}
          onChange={handleImageChange}
          type='text' />

        <button type='submit' >Salvar</button>

      </form>

    </div>
  )
}