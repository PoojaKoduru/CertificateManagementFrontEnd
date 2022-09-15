import { Link } from "react-router-dom"
import { useContext } from "react"
import FavouritesContext from "../store/FavouritesContext"
import classes from './MainNavigation.module.css'
function MainNavigation(){
    const favouritesCtx= useContext(FavouritesContext)
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Movies</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Movies</Link>
                    </li>
                    <li>
                        <Link to="/addMovie">Add Movies</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                        <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation