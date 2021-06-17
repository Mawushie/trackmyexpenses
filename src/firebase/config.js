import firebase from 'firebase' //importing the generic firebase that was installed

//configuring firebase to work with this particular project
const firebaseConfig = {
    apiKey: "AIzaSyCtkhxMsyYAuNqMaGSut2vXJ5jJHHZ_ePU",
    authDomain: "trackmyexpenses-e5664.firebaseapp.com",
    projectId: "trackmyexpenses-e5664",
    storageBucket: "trackmyexpenses-e5664.appspot.com",
    messagingSenderId: "601869210245",
    appId: "1:601869210245:web:d4ab09eb8f87a75eadcfec"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;