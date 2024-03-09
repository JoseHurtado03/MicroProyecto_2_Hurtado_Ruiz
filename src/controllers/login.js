import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export async function handleClick() {
  const result = await signInWithPopup(auth, googleProvider);
  const additionalInfo = getAdditionalUserInfo(result);

  if (additionalInfo.isNewUser) {
    const usersCollection = collection(db, "users");
    await setDoc(doc(usersCollection, result.user.email), {
      name: result.user.email,
      email: result.user.email,
      nombre: result.user.displayName,
    });
    const data = {};
    await addDoc(usersCollection, data);
  }
}
