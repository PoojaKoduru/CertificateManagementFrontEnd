import {useContext,useState,useEffect} from "react"
import MovieList from "../movies/MovieList"
import FavouritesContext from "../store/FavouritesContext"

function Favourites(){
    const favouritesCtx=useContext(FavouritesContext)
    let content;
    let [count,setCount] = useState(300)
    function Timer(){
        useEffect(()=>{
            setTimeout( ()=>{
                setCount(count=count-1);
            },1000);
        });
    }
    if(favouritesCtx.totalFavourites===0){
        content=<h3 >Nothing here yet. Start adding some</h3>
    }
    else{
        content=<MovieList movies={favouritesCtx.favourites}/>
    }
    return(
        <div>
            <h2>Favourites Page</h2>
            <Timer/>
            <h2>Counter : {count}</h2>
            {content}
        </div>
    )
}

export default Favourites