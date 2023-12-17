// // firebase-config.js
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA0h6h19mCt3AaPmANlw_qzq-6Sk-0KhoY",
//   authDomain: "my-login-page-b9ed2.firebaseapp.com",
//   projectId: "my-login-page-b9ed2",
//   storageBucket: "my-login-page-b9ed2.appspot.com",
//   messagingSenderId: "681831208384",
//   appId: "1:681831208384:web:206936389477b4f19d6425",
//   measurementId: "G-9X8GBNFS0L",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signUpWithEmailAndPassword = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// const addUserToFirestore = async (email, name, profession) => {
//   try {
//     // Get the currently authenticated user
//     const user = auth.currentUser;

//     // Add user details to Firestore
//     const userId = user.uid;
//     const userRef = doc(db, "UserCollection", userId);
//     await setDoc(userRef, {
//       email,
//       name,
//       profession,
//     });

//     console.log("User added to Firestore:", email, name, profession);
//     alert("user added success");
//   } catch (error) {
//     console.error("Error adding user to Firestore:", error.message);
//     alert("Error");
//   }
// };

// export { auth, db, signUpWithEmailAndPassword, addUserToFirestore };

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0h6h19mCt3AaPmANlw_qzq-6Sk-0KhoY",
  authDomain: "my-login-page-b9ed2.firebaseapp.com",
  projectId: "my-login-page-b9ed2",
  storageBucket: "my-login-page-b9ed2.appspot.com",
  messagingSenderId: "681831208384",
  appId: "1:681831208384:web:206936389477b4f19d6425",
  measurementId: "G-9X8GBNFS0L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const addUserToFirestore = async (email, name, profession) => {
  try {
    // Get the currently authenticated user
    const user = auth.currentUser;

    // Add user details to Firestore
    const userId = user.uid;
    const userRef = doc(db, "UserCollection", userId);
    await setDoc(userRef, {
      email,
      name,
      profession,
    });

    console.log("User added to Firestore:", email, name, profession);
    alert("user added success");
  } catch (error) {
    console.error("Error adding user to Firestore:", error.message);
    alert("Error");
  }
};

export { auth, db, signUpWithEmailAndPassword, addUserToFirestore };
