import React from "react";

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
    return (
        <div>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.name}>
                            {movie.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}