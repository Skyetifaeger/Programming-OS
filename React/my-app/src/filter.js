import React from "react";

export function Filter ({setFilter, filter}){
    return (
        <input 
        onChange={(e) => setFilter(e.target.value)}
        value={filter} 
        />
    )
}