import React, { useState } from "react";

const movies = [
    {
        name: "Sipderman"
    },
    {
        name: "Splounderman"
    },
    {
        name: "Slopterman"
    }
]

export function MoviesList() {
    const [filter, setFilter] = useState("")
    return (
        <div class="movies">
            <input onChange={(e) => setFilter(e.target.value)} value={filter} />
            <ul>
                {movies.filter((movie) =>
                    movie.name.toLowerCase().includes(filter.toLowerCase())
                ).map((movie) =>
                (
                    <li key={movie.name}>
                        {movie.name}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}