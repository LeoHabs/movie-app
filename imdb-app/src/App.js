import React, { createContext, useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";

export const MovieListContext = createContext(null);
export const SubmitFormContext = createContext(null);


function App() {
  const [movieList,setMovieList] = useState();
  const [filteredMovieList,setFilteredMovieList] = useState(movieList);
  const [searchBarSubmit, setSearchBarSubmit] = useState("");

  useEffect(()=>{
    setFilteredMovieList(movieList?.filter((e)=>(e.title.includes(searchBarSubmit))))
  },[searchBarSubmit]);

  useEffect(()=> {
    const requestOptions = {
      method:"GET",
      redirect: "follow"
    };

    fetch("https://imdb-api.com/en/API/Top250Movies/k_12345678",requestOptions)
      .then(response => response.json())
      .then(response => {
        setMovieList(response.items);
        setFilteredMovieList(response.items);
      })
      .catch(console.log("Ih rapaiz aí deu errado"));
  },[]);
  return <>
  <MovieListContext.Provider value={{loadedMovieList: filteredMovieList}}>
    <SubmitFormContext.Provider value={{setSearchContent: setSearchBarSubmit}}>
  <Header></Header>
    <main>
      <CardsContainer></CardsContainer>
    </main>
    </SubmitFormContext.Provider>
  </MovieListContext.Provider>
  {console.log(searchBarSubmit)}
  </>
}

export default App;
