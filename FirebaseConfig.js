// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBM0g49Jx9OByLvwSbi8S3etsqO9qAlUoU",
//   authDomain: "task-34f67.firebaseapp.com",
//   projectId: "task-34f67",
//   storageBucket: "task-34f67.appspot.com",
//   messagingSenderId: "702468696567",
//   appId: "1:702468696567:web:764f4842ff466d150066f2",
//   measurementId: "G-DX3Z86RESY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM0g49Jx9OByLvwSbi8S3etsqO9qAlUoU",
  authDomain: "task-34f67.firebaseapp.com",
  projectId: "task-34f67",
  storageBucket: "task-34f67.appspot.com",
  messagingSenderId: "702468696567",
  appId: "1:702468696567:web:764f4842ff466d150066f2",
  measurementId: "G-DX3Z86RESY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth, getApp };