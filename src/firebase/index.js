import firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyB_xttdCbm0CBGSiyaPcZtAdcEBPXchGQg",
    authDomain: "portafolio-c5703.firebaseapp.com",
    databaseURL: "https://portafolio-c5703.firebaseio.com",
    projectId: "portafolio-c5703",
    storageBucket: "portafolio-c5703.appspot.com",
    messagingSenderId: "366507667393"
  };
  firebase.initializeApp(config);


export const firebaseRef = firebase.database().ref();
export default firebase;
