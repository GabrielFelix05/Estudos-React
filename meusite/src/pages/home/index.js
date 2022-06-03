import {useEffect, useState} from 'react'
import api from '../../services/API'
//URL DA API: movie/now_playing?api_key=6b17de23fa51e4cb3e1ad7629ab0806d


function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        async function loadFilmes() {
            const response = await api.get("https://api.themoviedb.org/3/movie/now_playing", {
                params: {
                    api_key: "6b17de23fa51e4cb3e1ad7629ab0806d",
                    language: "pt-BR",
                    page: 1,
                }
            })
            
            console.log(response)
        }

        loadFilmes()
    }, [])
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home