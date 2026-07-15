const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019
  },
  {
    id: 5,
    title: "Titanic",
    genre: "Romance",
    year: 1997
  },
  {
    id: 6,
    title: "Joker",
    genre: "Drama",
    year: 2019
  },
  {
    id: 7,
    title: "Spider-Man: No Way Home",
    genre: "Superhero",
    year: 2021
  },
  {
    id: 8,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999
  },
  {
    id: 9,
    title: "John Wick",
    genre: "Action",
    year: 2014
  },
  {
    id: 10,
    title: "Frozen",
    genre: "Animation",
    year: 2013
  }
];

//this filter is used to return a array of the filtered
const newmovies=movies.filter((ther)=>{
    return ther.title==='Frozen'})
//console.log(newmovies)


const new2movies=movies.filter((ther)=> ther.year>2010)

//console.log(new2movies)

const new3movies=movies.filter((ther)=>{
    return ther.genre==='Action'
})

//new3movies.forEach((item)=>console.log(item.title))

movies.filter((ther)=>ther.year<2010).forEach((tog)=>console.log(tog))