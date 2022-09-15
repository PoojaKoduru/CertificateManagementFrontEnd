import classes from "./NewMovieForm.module.css"
import {useRef} from 'react'
import {MOVIE_DATA} from "../pages/AllMovies"
function NewMovieForm(props){
    const titleInputRef =useRef()
    const imageInputRef =useRef()
    const imdbInputRef =useRef()
    const descriptionInputRef =useRef()
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle =titleInputRef.current.value
        const enteredImage =imageInputRef.current.value
        const enteredImdb =imdbInputRef.current.value
        const enteredDescription =descriptionInputRef.current.value

        const movieData={
            id:"movie"+(MOVIE_DATA.length+1),
            title:enteredTitle,
            image:enteredImage,
            imdb:enteredImdb,
            description:enteredDescription
        };
        console.log(movieData.id);
        MOVIE_DATA[MOVIE_DATA.length]=movieData
        alert("Movie added successfully")
        titleInputRef.current.value=""
        imageInputRef.current.value=""
        imdbInputRef.current.value=""
        descriptionInputRef.current.value=""
        
    }
    return(
        <div className={classes.item} data-testid='form'>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Movie Title</label>
                    <input type ="text" required id ="title" ref ={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Movie Image</label>
                    <input type ="url" required id ="image"  ref ={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="imdb">IMDB Rating</label>
                    <input type ="text" required id ="imdb"  ref ={imdbInputRef}/>
                </div>
                <div className={classes.control} data-testid='field'>
                    <label htmlFor="description">Movie Title</label>
                    <textarea required id ="description" rows ='5'  ref ={descriptionInputRef}/>
                </div>    
                <div className={classes.actions}>
                    <button>Add Movie</button>
                </div>            
            </form>
        </div>
    )
}

export default NewMovieForm