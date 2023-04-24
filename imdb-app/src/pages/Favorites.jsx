import { useEffect, useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import Firebase from "../gateway/Firebase";
import { UserContext } from "../UserProvider";
import { query, collection, getDocs } from "firebase/firestore";
import { useContext } from "react";
import FavoritesCard from "../components/FavoritesCard/FavoritesCard";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const navigate = useNavigate();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        if (Firebase?.auth?.currentUser === null) {
            navigate("/login")
        }
    }, []);

    useEffect(() => {
        (async () => {
            if (user) {
                const favoritesRef = collection(
                    Firebase?.firestore,
                    "users",
                    user.user?.uid,
                    "favorites"
                );
                const q = query(favoritesRef);
                const querySnapshot = await getDocs(q);
                const tempList = [];
                querySnapshot.forEach((doc) => {
                    tempList.push(doc.data());
                });
                setFavoriteMovies(tempList);
            }
        })();
    }, [user])


    return <div className="favorites-page">
        <div className="favorites-header">
            <button onClick={() => navigate("/")}>
                <RiArrowGoBackLine size={30} />
            </button>
            <h1>Your favorites</h1>
            <h3>{Firebase?.auth?.currentUser?.email}</h3>
        </div>
        <div className="favorites-container">
            {favoriteMovies?.map((e, i) => {
                return (
                    <MovieCard
                        key={i}
                        image={e.image}
                        title={e.title}
                        score={e?.imDbRating}
                        year={e.year}
                        crew={e.crew}
                        id={e.id}
                    />
                );
            })}
        </div>
    </div>
}

export default Favorites;