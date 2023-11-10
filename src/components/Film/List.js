//*** fichier List.js ***

// Import React
import React from 'react';
import Film from './Film'; // Make sure to import the Film component
import { useState, useEffect } from 'react'
// List component
function YourComponent() {
    // Initialize with some initial data
    const initialFilms = [
        {
            poster: "../images/dwwm_1.png",
            abstract: "Résumé du premier film"
        },
        {
            poster: "../images/dwwm_1.png",
            abstract: "Résumé du deuxième film"
        },
        {
            poster: "../images/dwwm_1.png",
            abstract: "Résumé du troisième film"
        },
    ];
}
    // Use the useState hook to manage the films state
    const [films, setFilms] = useState();
    const search = useParams()

    useEffect(() => {
        getFilmsFromTMdbWithText(search.data, 1)
            .then(data => { setFilms(data.results) })
    })

    return (
        <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p>  {/* data correspond au paramètre de la route */}
            {films.map((film) => (
                <Film key={film.id} poster={film.poster_path} abstract={film.overview} />
            ))}
        </div>
    );

    export default List;
