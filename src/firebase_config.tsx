import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBVKZPmMb2CneF7Ft5qpfju3_5AOs81Zxg",
    authDomain: "beautyfashionfactory-a55d1.firebaseapp.com",
    projectId: "beautyfashionfactory-a55d1",
    storageBucket: "beautyfashionfactory-a55d1.appspot.com",
    messagingSenderId: "83356164699",
    appId: "1:83356164699:web:47df39e4ef194d30f2557e",
    measurementId: "G-M1FMZHNSNC"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
export const storageRef = firebase.storage().ref();
export const storage = firebase.storage;



