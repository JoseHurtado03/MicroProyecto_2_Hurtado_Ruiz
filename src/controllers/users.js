import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function createUser({
  username,
  email,
  name,
  lastName,
  pref_game,
  memberships,
}) {
  const userCollection = collection(db, "users");
  const data = {
    username,
    email,
    name,
    lastName,
    pref_game,
    memberships,
  };
  await addDoc(userCollection, data);
}
