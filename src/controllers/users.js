import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
// import { signInWithGoogle, getUserInfo } from "firebase/auth";

// export async function registerClick(
//   username,
//   email,
//   password,
//   nombre,
//   apellido,
//   videojuego_preferido
// ) {
//   const result = await signInWithGoogle(auth, googleProvider);
//   const Userinfo = getUserInfo(result);

//   if (Userinfo.isNewUser) {
//     const userCollection = collection(db, "users");
//     const data = {
//       username,
//       email: result.user.email,
//       password,
//       nombre,
//       apellido: result.user.displayName,
//       videojuego_preferido,
//     };
//     await addDoc(userCollection, data);
//   }
// }

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
