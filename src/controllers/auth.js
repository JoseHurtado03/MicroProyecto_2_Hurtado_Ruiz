import {
  signInWithPopup,
  getAdditionalUserInfo,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export async function handleClickGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  const additionalInfo = getAdditionalUserInfo(result);

  if (additionalInfo.isNewUser) {
    const usersCollection = collection(db, "users");
    await setDoc(doc(usersCollection, result.user.email), {
      email: result.user.email,
      nombre: result.user.displayName,
    });
    const data = {};
    await addDoc(usersCollection, data);
  }
}

export async function registerWithCredentials(email, password) {
  try {
    console.log(email, password);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function loginWithCredentials(email, password) {
  try {
    console.log(email, password);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// export async function handleClickGoogleUp() {
//   const result = await signInWithPopup(auth, googleProvider);
//   const additionalInfo = getAdditionalUserInfo(result);

//   if (additionalInfo.isNewUser) {
//     const usersCollection = collection(db, "users");
//     await setDoc(doc(usersCollection, result.user.email), {
//       email: result.user.email,
//       nombre: result.user.displayName,
//     });
//     const data = {};
//     await addDoc(usersCollection, data);
//   }
// }
