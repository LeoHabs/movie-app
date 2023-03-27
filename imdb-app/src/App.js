import React, { createContext, useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import MovieModal from "./components/MovieModal/MovieModal";

export const MovieListContext = createContext(null);
export const SubmitFormContext = createContext(null);
export const ComingSoonBtnContext = createContext(null);
export const LanguageContext = createContext(null);

function App() {
  const [movieList, setMovieList] = useState();
  const [btnClicked, setClicked] = useState(false);
  const [comingSoon, setComingSoon] = useState();
  const [filteredMovieList, setFilteredMovieList] = useState(movieList);
  const [searchBarSubmit, setSearchBarSubmit] = useState("");
  const [lang, setLang] = useState("en");

  const testObj = {
    id: "tt0068646",
    title: "The Godfather",
    originalTitle: "",
    fullTitle: "The Godfather (1972)",
    type: "Movie",
    year: "1972",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7046_AL_.jpg",
    releaseDate: "1972-03-24",
    runtimeMins: "175",
    runtimeStr: "2h 55min",
    plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    plotLocal: "",
    plotLocalIsRtl: false,
    awards: "Top rated movie #2 | Won 3 Oscars, 32 wins & 31 nominations total",
    directors: "Francis Ford Coppola",
    directorList: [
      {
        id: "nm0000338",
        name: "Francis Ford Coppola"
      }
    ],
    writers: "Mario Puzo, Francis Ford Coppola",
    writerList: [
      {
        id: "nm0701374",
        name: "Mario Puzo"
      },
      {
        id: "nm0000338",
        name: "Francis Ford Coppola"
      }
    ],
    stars: "Marlon Brando, Al Pacino, James Caan",
    starList: [
      {
        id: "nm0000008",
        name: "Marlon Brando"
      },
      {
        id: "nm0000199",
        name: "Al Pacino"
      },
      {
        id: "nm0001001",
        name: "James Caan"
      }
    ],
    actorList: [
      {
        id: "nm0000008",
        image: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_Ratio1.3000_AL_.jpg",
        name: "Marlon Brando",
        asCharacter: "Don Vito Corleone"
      },
      {
        id: "nm0000199",
        image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_Ratio1.0000_AL_.jpg",
        name: "Al Pacino",
        asCharacter: "Michael Corleone"
      },
      {
        id: "nm0001001",
        image: "https://m.media-amazon.com/images/M/MV5BMTI5NjkyNDQ3NV5BMl5BanBnXkFtZTcwNjY5NTQ0Mw@@._V1_Ratio1.0000_AL_.jpg",
        name: "James Caan",
        asCharacter: "Sonny Corleone"
      },
      {
        id: "nm0000473",
        image: "https://m.media-amazon.com/images/M/MV5BMTY5NDI5OTEyOF5BMl5BanBnXkFtZTgwMzU4NDI1NzM@._V1_Ratio1.0000_AL_.jpg",
        name: "Diane Keaton",
        asCharacter: "Kay Adams"
      },
      {
        id: "nm0144710",
        image: "https://m.media-amazon.com/images/M/MV5BMjI2MzA3MjQ5N15BMl5BanBnXkFtZTcwMzY5NDYwOA@@._V1_Ratio1.0000_AL_.jpg",
        name: "Richard S. Castellano",
        asCharacter: "Clemenza"
      },
      {
        id: "nm0000380",
        image: "https://m.media-amazon.com/images/M/MV5BMjk1MjA2Mjc2MF5BMl5BanBnXkFtZTcwOTE4MTUwMg@@._V1_Ratio1.0000_AL_.jpg",
        name: "Robert Duvall",
        asCharacter: "Tom Hagen"
      },
      {
        id: "nm0001330",
        image: "https://m.media-amazon.com/images/M/MV5BMjE0MTk1NjkzN15BMl5BanBnXkFtZTcwMzA1MjE1Mg@@._V1_Ratio1.0000_AL_.jpg",
        name: "Sterling Hayden",
        asCharacter: "Capt. McCluskey"
      },
      {
        id: "nm0549134",
        image: "https://m.media-amazon.com/images/M/MV5BMjk0NjY1MjAyMl5BMl5BanBnXkFtZTcwNzY5NDYwOA@@._V1_Ratio1.0000_AL_.jpg",
        name: "John Marley",
        asCharacter: "Jack Woltz"
      },
      {
        id: "nm0002017",
        image: "https://m.media-amazon.com/images/M/MV5BNzE0MzU0MzY3OF5BMl5BanBnXkFtZTcwMjE2MjYwOA@@._V1_Ratio1.0000_AL_.jpg",
        name: "Richard Conte",
        asCharacter: "Barzini"
      },
      {
        id: "nm0504803",
        image: "https://m.media-amazon.com/images/M/MV5BOWUxYTJkY2MtYmZmZi00ZjBmLWJmM2ItMmU3YWI2YzBhZDUwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio1.0000_AL_.jpg",
        name: "Al Lettieri",
        asCharacter: "Sollozzo"
      },
      {
        id: "nm0001820",
        image: "https://m.media-amazon.com/images/M/MV5BMjE1MDk5NzMyN15BMl5BanBnXkFtZTYwMjA4Mjg1._V1_Ratio1.0000_AL_.jpg",
        name: "Abe Vigoda",
        asCharacter: "Sal Tessio"
      },
      {
        id: "nm0001735",
        image: "https://m.media-amazon.com/images/M/MV5BMTkwMzc0NjQzNV5BMl5BanBnXkFtZTYwNzM0NTk3._V1_Ratio1.0000_AL_.jpg",
        name: "Talia Shire",
        asCharacter: "Connie Corleone Rizzi"
      },
      {
        id: "nm0751625",
        image: "https://m.media-amazon.com/images/M/MV5BNTgyMTgxODM4MV5BMl5BanBnXkFtZTcwNDg5NDYwOA@@._V1_Ratio1.0000_AL_.jpg",
        name: "Gianni Russo",
        asCharacter: "Carlo Rizzi"
      },
      {
        id: "nm0001030",
        image: "https://m.media-amazon.com/images/M/MV5BMTUzMTM1MjI5NV5BMl5BanBnXkFtZTcwMTM5NTM1Mw@@._V1_Ratio1.0000_AL_.jpg",
        name: "John Cazale",
        asCharacter: "Fredo Corleone"
      },
      {
        id: "nm0094036",
        image: "https://m.media-amazon.com/images/M/MV5BNWY2ZGQxMDctNWUyYS00NzYyLTk0MjMtZWY4MWY2YzQ1ZGRiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_Ratio1.0000_AL_.jpg",
        name: "Rudy Bond",
        asCharacter: "Cuneo"
      },
      {
        id: "nm0553887",
        image: "https://m.media-amazon.com/images/M/MV5BMjMyMDk4MzYyMl5BMl5BanBnXkFtZTcwNzg5NDYwOA@@._V1_Ratio1.0000_AL_.jpg",
        name: "Al Martino",
        asCharacter: "Johnny Fontane"
      },
      {
        id: "nm0455088",
        image: "https://m.media-amazon.com/images/M/MV5BODg5OTAxNDQzMl5BMl5BanBnXkFtZTgwOTM3ODIxNjM@._V1_Ratio1.0143_AL_.jpg",
        name: "Morgana King",
        asCharacter: "Mama Corleone"
      },
      {
        id: "nm0598926",
        image: "https://m.media-amazon.com/images/M/MV5BMjFmMjQ4ODMtNDZmZC00NzQ3LTlmODEtOTBlMGIzMzUxY2Q4XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio1.0000_AL_.jpg",
        name: "Lenny Montana",
        asCharacter: "Luca Brasi"
      }
    ],
    fullCast: null,
    genres: "Crime, Drama",
    genreList: [
      {
        key: "Crime",
        value: "Crime"
      },
      {
        key: "Drama",
        value: "Drama"
      }
    ],
    companies: "Paramount Pictures, Albert S. Ruddy Productions, Alfran Productions",
    companyList: [
      {
        id: "co0023400",
        name: "Paramount Pictures"
      },
      {
        id: "co0921482",
        name: "Albert S. Ruddy Productions"
      },
      {
        id: "co0255097",
        name: "Alfran Productions"
      }
    ],
    countries: "USA",
    countryList: [
      {
        key: "USA",
        value: "USA"
      }
    ],
    languages: "English, Italian, Latin",
    languageList: [
      {
        key: "English",
        value: "English"
      },
      {
        key: "Italian",
        value: "Italian"
      },
      {
        key: "Latin",
        value: "Latin"
      }
    ],
    contentRating: "R",
    imDbRating: "9.2",
    imDbRatingVotes: "1889288",
    metacriticRating: "100",
    ratings: null,
    wikipedia: null,
    posters: null,
    images: null,
    trailer: null,
    boxOffice: {
      budget: "$6,000,000 (estimated)",
      openingWeekendUSA: "$302,393",
      grossUSA: "$136,381,073",
      cumulativeWorldwideGross: "$250,341,816"
    },
    tagline: null,
    keywords: "mafia,patriarch,crime family,organized crime,rise to power",
    keywordList: [
      "mafia",
      "patriarch",
      "crime family",
      "organized crime",
      "rise to power"
    ],
    similars: [
      {
        id: "tt0071562",
        title: "The Godfather Part II",
        image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7053_AL_.jpg",
        imDbRating: "9.0"
      },
      {
        id: "tt0111161",
        title: "The Shawshank Redemption",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "9.3"
      },
      {
        id: "tt0468569",
        title: "The Dark Knight",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "9.0"
      },
      {
        id: "tt0110912",
        title: "Pulp Fiction",
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6860_AL_.jpg",
        imDbRating: "8.9"
      },
      {
        id: "tt0109830",
        title: "Forrest Gump",
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6957_AL_.jpg",
        imDbRating: "8.8"
      },
      {
        id: "tt0099674",
        title: "The Godfather Part III",
        image: "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "7.6"
      },
      {
        id: "tt0108052",
        title: "Schindler's List",
        image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "9.0"
      },
      {
        id: "tt0099685",
        title: "Goodfellas",
        image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.7"
      },
      {
        id: "tt1375666",
        title: "Inception",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.8"
      },
      {
        id: "tt0137523",
        title: "Fight Club",
        image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.8"
      },
      {
        id: "tt0167260",
        title: "The Lord of the Rings: The Return of the King",
        image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "9.0"
      },
      {
        id: "tt0133093",
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.7"
      }
    ],
    tvSeriesInfo: null,
    tvEpisodeInfo: null,
    errorMessage: ""
  }

  const comingSoonMap = {
    btnClicked: btnClicked,
    setClicked: setClicked
  }

  useEffect(() => {
    setFilteredMovieList(btnClicked ? comingSoon : movieList);
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
            <LanguageContext.Provider value={lang}>
              <CardsContainer />
            </LanguageContext.Provider>
          </main>
        </ComingSoonBtnContext.Provider>
      </SubmitFormContext.Provider>
    </MovieListContext.Provider>
  </>
}

export default App;
