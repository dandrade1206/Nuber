const firebase = require('firebase');

firebase.initializeApp({
    serviceAccount:"./nuber-9198d6519a05.json",
    databaseURL:"https://nuber-7bf00.firebaseio.com/"
});

var ref = firebase.database().ref('nuber');

var users = ref.child('users')
var rides = ref.child('rides')

module.exports=({ users, rides })