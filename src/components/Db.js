import axios from 'axios'

const Db = () => {
    const API_KEY = "e24cedf0a069870d368a7e044704b2bb"
    const API_BASE = "https://api.themoviedb.org/3"

    const basiFetch = async (endpoit) => {
        let dadosDb = await axios.get(`${API_BASE}${endpoit}language=pt-br&api_key=${API_KEY}`)

        // console.log(dadosDb)
        return dadosDb
    }

    var dados =[
        {
            slug: 'originais',
            title: 'Originais do Netflix',
            items: basiFetch(`/discover/tv?with_network=213&`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: basiFetch(`/trending/all/week?`)
        },
        {
            slug: 'rated',
            title: 'Em altas',
            items: basiFetch(`/movie/top_rated?`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: basiFetch(`/discover/movie?with_genres=28&`)
        },
        {
            slug: 'comedy',
            title: 'Comedia',
            items: basiFetch(`/discover/movie?with_genres=35&`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: basiFetch(`/discover/movie?with_genres=27&`)
        },
        {
            slug: 'Romance',
            title: 'Romance',
            items: basiFetch(`/discover/movie?with_genres=10749&`)
        },
        {
            slug: 'documentary',
            title: 'Documentarios',
            items: basiFetch(`/discover/movie?with_genres=99&`)
        }
    ]
    console.log(dados)

    return (
        <>
        <p>Olá</p>
        </>
    )
}

export default Db;