import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Firebase from "./gateway/Firebase";
const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState();

    const monitorStateChange = async () => {
        onAuthStateChanged(Firebase.auth, (user) => {
            setUser(user);
        });
    };
    useEffect(() => {
        monitorStateChange();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}

export { UserProvider, UserContext };