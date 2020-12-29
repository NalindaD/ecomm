import  firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-uMZHX4EXzzZtivo9AYtlrrb7ECf8DY",
  authDomain: "ecommerce-39587.firebaseapp.com",
  projectId: "ecommerce-39587",
  storageBucket: "ecommerce-39587.appspot.com",
  messagingSenderId: "36984775351",
  appId: "1:36984775351:web:404288a105f1150dd6a332"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
