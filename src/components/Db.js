import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const Db = () => {
    const API_KEY = "e24cedf0a069870d368a7e044704b2bb"
    const API_BASE = "https://api.themoviedb.org/3"

    const [allData,setAllData] = useState([])

    const basiFetch = async (endpoit) => {
        let dadosDb = await axios.get(`${API_BASE}${endpoit}language=pt-br&api_key=${API_KEY}`)
        return dadosDb.data.results
    }
    
    const getAll = useCallback(async ()=>{
        var dados =[
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basiFetch(`/discover/tv?with_network=213&`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basiFetch(`/trending/all/week?`)
            },
            {
                slug: 'rated',
                title: 'Em altas',
                items: await basiFetch(`/movie/top_rated?`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basiFetch(`/discover/movie?with_genres=28&`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basiFetch(`/discover/movie?with_genres=35&`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basiFetch(`/discover/movie?with_genres=27&`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basiFetch(`/discover/movie?with_genres=10749&`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basiFetch(`/discover/movie?with_genres=99&`)
            }
        ]

        setAllData(dados)
    },[])


    useEffect(()=>{
        getAll()
    },[getAll])

    useEffect(()=>{
       console.log('teste',allData)
    },[allData])
    


    return (
        <>
        <p>Olá</p>
        </>
    )
}

export default Db;