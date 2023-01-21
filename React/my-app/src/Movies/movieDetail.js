import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const BASE_URL="https://api.themoviedb.org/3/movie/"
const API_KEY="?api_key=c305db71fd7bdaaa011546a949f5404f"

export function MovieDetail() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try{
            const res = await fetch(BASE_URL + id + API_KEY)
            const newMovie = await res.json()
            setMovie(newMovie)
        } catch (e){
            console.error(e)
        }
    }

    useEffect(() =>{
        getMovie()
    }, [id])

    if (!movie.title) return null

    return (
        <div>
            <Link to ="/">GET ME OUT OF HERE</Link>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}