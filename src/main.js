// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSqM4y9V77o6ohxPv0oBDBE8FOhKd3bs8",
  authDomain: "le-portoflio.firebaseapp.com",
  projectId: "le-portoflio",
  storageBucket: "le-portoflio.appspot.com",
  messagingSenderId: "572778021103",
  appId: "1:572778021103:web:dd71aaca97e9f6265c5b1a",
  measurementId: "G-4E4VGLT9N8"
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fapp);

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')

