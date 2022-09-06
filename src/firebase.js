// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
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

export const expgetToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: 'BJpZo2W-QHMsdGP1v0XExDEssfMVnBAmau1zMTGBK3bTA2BaVjEBsoP_aLsdfkhlSyq8pdqlmg4xaDdqvflzq88'
  }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {

    onMessage(messaging, (payload) => {
      console.log("Payload resolve", payload)
      resolve(payload);
    });

  });

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });