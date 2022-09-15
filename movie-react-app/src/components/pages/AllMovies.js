import MovieList from "../movies/MovieList"

const MOVIE_DATA =[
    {
        id:"movie1",
        title:"Inception",
        image:"https://th.bing.com/th/id/OIP.aO8p6rkMEA1sXmVYaU-QLAHaEK?w=265&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        imdb:"8.8",
        description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
    },
    {   id:"movie2",
        title:"Rocketry: The Nambi Effect",
        image:"https://th.bing.com/th/id/OIP.YzxO_kx3Nq1CYsjd-yZGRQHaDt?w=321&h=174&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        imdb:"9.0",
        description:"The film is based on the life of Nambi Narayanan, played by Madhavan, a scientist at the Indian Space Research Organisation, who was accused in the ISRO espionage case and later exonerated."
    },
    {
        id:"movie3",
        title:"The Kashmir Files",
        image:"https://th.bing.com/th/id/OIP.G62S-YIJO6skt5d7AYnLcgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        imdb:"8.3",
        description:"The film presents a fictional storyline centred around the 1990s exodus of Kashmiri Hindus from Indian-administered Kashmir. It depicts the exodus and the events leading up to it as a genocide, a notion that is widely considered inaccurate by scholars."
    },{
        id:"movie4",
        title:"The Intern",
        image:"https://th.bing.com/th/id/OIP.x52I34QjJaxk8l2oxbM1GAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        imdb:"7.1",
        description:"Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin."
    }
]

function AllMovies(){
    return(
        <div>
            <h1>All Movies Page</h1>
            <MovieList movies ={MOVIE_DATA}/>
        </div>
    )
}

export default AllMovies
export {MOVIE_DATA};