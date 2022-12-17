import db from './firebasefunctions.js';
import {collection, addDoc} from "firebase/firestore";

class Push{

    Push(){
        // this is purely for pushing data to firebase
    }

    async Push_Trail(data){
        const dbRef = collection(db, "TRAILS");
        addDoc(dbRef, data)
        .then(docRef => {
            console.log("Document has been added successfully");
        })
        .catch(error => {
            console.log(error);
    })
    }

    async Push_User(data){
        await db.collection('USERS').add(data);
    }

    async Push_Review(data){
        const dbRef = collection(db, "REVIEWS");
        addDoc(dbRef, data)
        .then(docRef => {
            console.log("Document has been added successfully");
        })
        .catch(error => {
            console.log(error);
    })
    }

    async Push_Saved_Trail(data){
        await db.collection('SAVED_TRAILS').add(data);
    }
}
module.exports = Push;