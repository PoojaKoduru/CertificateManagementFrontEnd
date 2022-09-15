import classes from "./MovieItem.module.css"
import {useContext} from 'react'
import FavouritesContext from "../store/FavouritesContext"

function MovieItem(props){
    const favouritesCtx = useContext(FavouritesContext)
    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id)
    function toggleFavouritesStatusHandler(){
        if(itemIsFavourite){
            favouritesCtx.removeFavourite(props.id);
        } else{
            favouritesCtx.addFavourite({
                id:props.id,
                title:props.title,
                image:props.image,
                imdb:props.imdb,
                description:props.description
            });
        }

    }
    return(
        <ul className={classes.item}>
            <div className={classes.image}>
                <img src ={props.image} alt ={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <h3>{props.imdb}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouritesStatusHandler}>
                    {itemIsFavourite ?
                    'Remove from Favourites':
                    'Add to Favourites'}
                </button>
            </div>
        </ul>
    )
}

export default MovieItem