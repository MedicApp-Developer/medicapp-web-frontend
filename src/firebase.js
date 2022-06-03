// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJvfMoA2Oo2qSZwAApbKv4u13XSo5HtI",
  authDomain: "fir-app-11c19.firebaseapp.com",
  projectId: "fir-app-11c19",
  storageBucket: "fir-app-11c19.appspot.com",
  messagingSenderId: "540665251754",
  appId: "1:540665251754:web:0bd8f6cfc2ee923e0f0dd3",
  measurementId: "G-Y0XL13PHWH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
// export default firebaseApp;
// const analytics = getAnalytics(firebaseApp);
// const messaging = getMessaging(firebaseApp);

export const expgetToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BEqbCWm15gSkLSHeGz9Srk2ftgc_gG6g80vUvcik7TtMKp1XHwszZzH85Wd1pN6xB3RQIU4OFpzJataAJQhW5zg'}).then((currentToken) => {
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