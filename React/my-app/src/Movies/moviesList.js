import React, { useState } from "react";
import { Movie } from "./movie";
import { Filter } from "../filter";

const movies = [
    {
        name: "Sipderman"
    },
    {
        name: "Splounderman"
    },
    {
        name: "Slopterman"
    },
    {
        name: "Skye"
    }
]

export function MoviesList() {
    const [filter, setFilter] = useState("")
    return (
        <div class="movies">
            <Filter filter={filter} setFilter={setFilter}/>
            <ul>
                {movies.filter((movie) =>
                    movie.name.toLowerCase().includes(filter.toLowerCase())
                ).map((movie) => (
                    <Movie key={movie.name} movie={movie}/>
                )
                )}
            </ul>
        </div>
    )
}