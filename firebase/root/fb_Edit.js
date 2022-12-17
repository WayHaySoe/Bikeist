class Edit{

    //gets and edits a trail by id
    Edit_Trail_By_ID(data, newdata){
        const referance = db.collection('TRAILS').where('TRAIL_ID', '==', data);
        const snapshot = referance.get();
        if (snapshot.empty){
            console.error("No such collection exisits");
            return
        } else {
            const result = referance.update(newdata);
        }
    }

    // gets and edits and a user by their id
    Edit_User_By_ID(data, newdata){
        const referance = db.collection('USERS').where('USER_ID', '==', data);
        const snapshot = referance.get();
        if (snapshot.empty){
            console.error("No such collection exisits");
            return
        } else {
            const result = referance.update(newdata);
        }
    }

    // gets and edits reviews by the user id
    Edit_Reviews_By_ID(data, newdata){
        const referance = db.collection('REVIEWS').where('REVIEW_ID', '==', data);
        const snapshot = referance.get();
        if (snapshot.empty){
            console.error("No such collection exisits");
            return
        } else {
            const referance = trail.update(newdata);
        }
    }

}
module.exports = Edit