import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlphPOXmZKrJMVxNRWmecF-kP3ww2z7DQ",
    authDomain: "sae-203-festival.firebaseapp.com",
    projectId: "sae-203-festival",
    storageBucket: "sae-203-festival.appspot.com",
    messagingSenderId: "415890896858",
    appId: "1:415890896858:web:9dca1b5e54bbe7eef432e3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
