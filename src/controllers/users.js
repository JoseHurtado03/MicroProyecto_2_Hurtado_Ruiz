import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function createUser({
  username,
  email,
  password,
  nombre,
  apellido,
  videojuego_preferido,
}) {
  const userCollection = collection(db, "users");
  const data = {
    username,
    email,
    password,
    nombre,
    apellido,
    videojuego_preferido,
  };
  await addDoc(userCollection, data);
}
