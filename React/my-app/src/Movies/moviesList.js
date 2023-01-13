import React, { useState, useEffect} from "react";
import { Movie } from "./movie";
import { Filter } from "../filter";

const API_URL = 
'https://api.themoviedb.org/3/discover/movie?api_key=c305db71fd7bdaaa011546a949f5404f&language=us_EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=ja'
export function MoviesList() {
    const [filter, setFilter] = useState("")
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        try{
            const res = await fetch(API_URL)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e){
            console.error(e)
        }
    }

    useEffect(() => {
        getMovies()
    })
    
    return (
        <div class="movies">
            <Filter filter={filter} setFilter={setFilter}/>
            <ul>
                {movies.filter((movie) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                ).map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                )
                )}
            </ul>
        </div>
    )
}