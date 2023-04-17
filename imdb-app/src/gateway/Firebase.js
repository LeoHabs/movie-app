import { initializeApp, getAuth } from "firebase/app";

class Firebase {
    app = null;
    auth = null;

    constructor() {
        this.app = initializeApp({
            apiKey: "AIzaSyAnNANkRDrDjCaWP5Ui2C8C3HpDaXJy6-M",
            authDomain: "movie-app-15e5a.firebaseapp.com",
            projectId: "movie-app-15e5a",
            storageBucket: "movie-app-15e5a.appspot.com",
            messagingSenderId: "933632930155",
            appId: "1:933632930155:web:b3d5658406fa5136469c2e",
            measurementId: "G-PB4EDKV50P"
        });
        this.auth = getAuth(this.app);
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new Firebase();