import MovieList from "../movies/MovieList"
import { Component } from "react"
import StatefulComponent from "./StatefulComponent";

class AllMovies extends Component{
    //get request here
    state={
        MOVIE_DATA:[]
    }
    baseURL="http://localhost:8080/movie";
    //executed when component gets loaded
    async componentDidMount(){
        const response = await fetch(this.baseURL+"/");
        const body = await response.json();
        this.setState({MOVIE_DATA:body})
    }
    render(){
        const {MOVIE_DATA}=this.state;
        return(
        <div style={{textAlign:"center"}}>            
            <h1>All Movies Page</h1>
            <StatefulComponent/>
            <MovieList movies ={MOVIE_DATA}/>
        </div>
        );
    }
}

export default AllMovies
