import React, { useState, useEffect} from "react";
import { Movie } from "./movie";
import { Filter } from "../filter";

const API_URL = 
'https://api.themoviedb.org/3/discover/movie?language=us_EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=ja&api_key='
const CONFIG_URL =
'https://api.themoviedb.org/3/configuration?api_key=' 

export function MoviesList() {
    const [filter, setFilter] = useState("")
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})
    
    const getMovies = async () => {
        try{
            const res = await fetch(API_URL + process.env.REACT_APP_API_KEY)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e){
            console.error(e)
        }
    }

    const getConfig = async () => {
        try{
            const res = await fetch(CONFIG_URL + process.env.REACT_APP_API_KEY)
            const config = await res.json()
            setConfig(config)
        } catch (e){
            console.error(e)
        }
    }

    useEffect(() => {
        getMovies()
        getConfig()
    }, [])
    
    return (
        <div className="movies">
            <Filter filter={filter} setFilter={setFilter}/>
            <ul className = "movies-list">
                {movies.filter((movie) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                ).map((movie) => (
                    <Movie key={movie.id} config = {config} movie={movie}/>
                )
                )}
            </ul>
        </div>
    )
}