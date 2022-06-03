// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDyJvfMoA2Oo2qSZwAApbKv4u13XSo5HtI",
    authDomain: "fir-app-11c19.firebaseapp.com",
    projectId: "fir-app-11c19",
    storageBucket: "fir-app-11c19.appspot.com",
    messagingSenderId: "540665251754",
    appId: "1:540665251754:web:0bd8f6cfc2ee923e0f0dd3",
    measurementId: "G-Y0XL13PHWH"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});