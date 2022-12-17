import db from './firebasefunctions.js';
import {collection, addDoc, getDocs, getDoc} from "firebase/firestore";

class Fetch{



    Fetch(){
        var data = null;
    }

    //gets a trail by id
    async Fetch_Trail_By_ID(data){
        const collectionRef = collection(db, 'TRAILS')
        await getDocs(collectionRef).then(docs => {
            docs.forEach(doc => {
                if (doc.id == data){
                    return doc.data();
                }
        })
    })

        //const returnItems = [docs.s];
    }

    //gets a trail by user id
    async Fetch_Trail_By_User_ID(data){
        const collectionRef = collection(db, 'TRAILS')
        const docs = await getDocs(collectionRef);
        docs.forEach(doc => {
            //console.log(doc.data());
        })
    }

    // gets and a user by their id
    Fetch_User_By_ID(data){
        const snapshot = db.collection('USER').where('USER_ID', '==', data).get();
        if (snapshot.empty){
            return
        } else {
            return snapshot;
        }
    }

    // gets reviews by the trail id
    Fetch_Reviews_By_Trail_ID(data){
        const snapshot = db.collection('REVIEWS').where('TRAIL_ID', '==', data).get();
        if (snapshot.empty){
            return
        } else {
            return snapshot;
        }
    }

    // gets reviews by the user id
    Fetch_Reviews_By_User_ID(data){
        const snapshot = db.collection('REVIEWS').where('USER_ID', '==', data).get();
        if (snapshot.empty){
            return
        } else {
            return snapshot;
        }
    }

    // gets reviews by the user id
    Fetch_Reviews_By_ID(data){
        const snapshot = db.collection('REVIEWS').where('REVIEW_ID', '==', data).get();
        if (snapshot.empty){
            return
        } else {
            return snapshot;
        }
    }
}
module.exports = Fetch