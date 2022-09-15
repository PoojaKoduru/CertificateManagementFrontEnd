import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites:[],
    totalFavourites:0,
    addFavourite:(favouriteMovie)=>{},
    removeFavourite:(movieId)=>{},
    itemIsFavourite:(movieId)=>{}
});

export function FavouritesContextProvider(props){
    const [userFavourites,setUserFavourites]=useState([]);
    
    function addFavouriteHandler(movie){
        setUserFavourites((prevFavourites)=>{
            return prevFavourites.concat(movie);
        });
    }
    function removeFavouriteHandler(movieId){
        setUserFavourites(prevFavourites=>{
            return prevFavourites.filter(movie=>movie.id !==movieId)
        })
    }
    function itemIsFavouriteHandler(movieId){
        return userFavourites.some(movie=> movie.id ===movieId)
    }
    const context={
        favourites:userFavourites,
        totalFavourites : userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsFavourite:itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
         {props.children}
    </FavouritesContext.Provider>
}
export default FavouritesContext;
