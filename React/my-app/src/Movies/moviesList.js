import React, { useState, useRef} from "react";
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
    // const ulRef = useRef(null)
    // const ref = useRef(null)
    // console.log(ref.current)
    return (
        <div class="movies">
            {/* <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input ref = {ref}/>
                <button />
            </form> */}
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