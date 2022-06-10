import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/API'

import './styles.css'

function Filme() {
    const { id } = useParams()
    let history = useHistory()

    const [filme, setFilme] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "6b17de23fa51e4cb3e1ad7629ab0806d",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log("Fime não encontrado")
                history.push("/")
            })
        }

        loadFilme()

        return () => {
            console.log("Componente foi desmontado!")
        }
    }, [id, history])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix")
        let filtesSalvos = JSON.parse(minhaLista) || []
        const hasFilme = filtesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilme) {
            alert("Esse filme já está na lista")
            return
        }

        filtesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filtesSalvos))
        alert("Filme salvo com sucesso!")
    }
 
    if(loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h2>Sinopse</h2>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme