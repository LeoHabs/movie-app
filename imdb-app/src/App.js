import React, { createContext, useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";

export const MovieListContext = createContext(null);
export const SubmitFormContext = createContext(null);
export const ComingSoonBtnContext = createContext(null);

function App() {
  const [movieList, setMovieList] = useState();
  const [btnClicked, setClicked] = useState(false);
  const [comingSoon, setComingSoon] = useState();
  const [filteredMovieList, setFilteredMovieList] = useState(movieList);
  const [searchBarSubmit, setSearchBarSubmit] = useState("");
  const [lang, setLang] = useState("en");

  const comingSoonMap = {
    btnClicked: btnClicked,
    setClicked: setClicked
  }

  useEffect(() => {
    setFilteredMovieList(btnClicked ? comingSoon : movieList);
    console.log(comingSoon)
  }, [btnClicked]);

  useEffect(() => {
    const baseList = btnClicked ? comingSoon : movieList;
    setFilteredMovieList(baseList?.filter((e) => (e.title.includes(searchBarSubmit))))
  }, [searchBarSubmit]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://imdb-api.com/${lang}/API/Top250Movies/k_12345678`, requestOptions)
      .then(response => response.json())
      .then(response => {
        setMovieList(response.items);
        setFilteredMovieList(response.items);
      })
      .catch(console.log("Ih rapaiz aí deu errado"));
  }, [lang]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://imdb-api.com/${lang}/API/ComingSoon/12345678`, requestOptions)
      .then(response => response.json())
      .then(response => {
        setComingSoon(response.items);
      })
      .catch(console.log("Ih rapaiz aí deu errado"));
  }, [lang]);

  return <>
    <MovieListContext.Provider value={{
      loadedMovieList: filteredMovieList,
      setAppLang: setLang
    }}>
      <SubmitFormContext.Provider value={{ setSearchContent: setSearchBarSubmit }}>
        <ComingSoonBtnContext.Provider value={comingSoonMap}>
          <Header />
          <main>
            <CardsContainer></CardsContainer>
          </main>
        </ComingSoonBtnContext.Provider>
      </SubmitFormContext.Provider>
    </MovieListContext.Provider>
  </>
}

export default App;
