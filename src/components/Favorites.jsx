import React from 'react';
import '../App.css';
import { useAppContext } from './context/appContext';



function Favorites() {

    const { favorites, addToFavorites, removeFavorites } = useAppContext();

    console.log("favorites are ", favorites)

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book)=> book.id === id);

        return boolean;
    }


    return ( 
        <div className='favorites'>
            {favorites.length > 0 ? 
             favorites.map((book) => (
                <div key={book.id} className="book">
                    <div>
                        <h4>{book.title}</h4>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" />
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
                        
                        <button onClick={()=> removeFavorites(book.id)}>
                        Remove from Favorites
                        </button>
                    ) : (
                        <button onClick={()=> addToFavorites(book)}>
                            Add to Favorites
                        </button>
                    )}
                    </div>
                </div>
            )) : (
                    <h1>You don't have any Favorite book yet!</h1>
                )}
            </div>
    );
}

export default Favorites;