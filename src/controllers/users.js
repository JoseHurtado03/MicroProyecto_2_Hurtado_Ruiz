import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function createUser({
  username,
  email,
  name,
  lastName,
  pref_game,
  memberships,
  userUID,
}) {
  const userCollection = collection(db, "users");
  await setDoc(doc(userCollection, userUID), {
    email,
    name,
    lastName,
    username,
    pref_game,
    memberships,
  });
}
