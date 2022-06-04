// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF1TYRiYh_LYqNrvzj9Jfqvr6kSvagdIM",
  authDomain: "medicapp-find-doctors.firebaseapp.com",
  projectId: "medicapp-find-doctors",
  storageBucket: "medicapp-find-doctors.appspot.com",
  messagingSenderId: "650333018935",
  appId: "1:650333018935:web:07343d60843fcd00dbd8b2",
  measurementId: "G-6276G70V0B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
// export default firebaseApp;
// const analytics = getAnalytics(firebaseApp);
// const messaging = getMessaging(firebaseApp);

export const expgetToken = (setTokenFound) => {
    return getToken(messaging, {
      vapidKey: 'BJpZo2W-QHMsdGP1v0XExDEssfMVnBAmau1zMTGBK3bTA2BaVjEBsoP_aLsdfkhlSyq8pdqlmg4xaDdqvflzq88'
    }).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});