import React from "react";
import PropTypes from "prop-types";

export function Movie({ movie }) {
    return (
        <li>
            {movie.name}
        </li>
    );
}

Movie.propType = {
    movie: PropTypes.shape ({
        name: PropTypes.string.isRequired
    }).isRequired
}