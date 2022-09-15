import {useContext} from "react"
import MovieList from "../movies/MovieList"
import FavouritesContext from "../store/FavouritesContext"

function Favourites(){
    const favouritesCtx=useContext(FavouritesContext)
    let content;
    if(favouritesCtx.totalFavourites===0){
        content=<h3 >Nothing here yet. Start adding some</h3>
    }
    else{
        content=<MovieList movies={favouritesCtx.favourites}/>
    }
    return(
        <div>
            <h2>Favourites Page</h2>
            {content}
        </div>
    )
}

export default Favourites