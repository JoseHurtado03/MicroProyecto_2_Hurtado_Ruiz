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
  const res = result.user.displayName.replace(/ /g, "");

  if (additionalInfo.isNewUser) {
    const usersCollection = collection(db, "users");
    const data = {
      email: result.user.email,
      name: result.user.displayName.split(" ")[0],
      lastName: result.user.displayName.split(" ")[1],
      username: res,
      pref_game: "",
      membership: [],
    };
    await addDoc(usersCollection, data);
  }

  // const collectionV = collection(db, "Clubes");
  // const documento = [
  //   {
  //     ID: "1",
  //     nombre: "Club de Aventureros",
  //     descripcion:
  //       "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
  //     videojuegos: ["1", "3", "11"],
  //   },
  //   {
  //     ID: "2",
  //     nombre: "Club de Estrategia",
  //     descripcion:
  //       "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
  //     videojuegos: ["4", "15", "16"],
  //   },
  //   {
  //     ID: "3",
  //     nombre: "Club de Constructores",
  //     descripcion:
  //       "Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.",
  //     videojuegos: ["7", "8", "14"],
  //   },
  //   {
  //     ID: "4",
  //     nombre: "Club de Fútbol Virtual",
  //     descripcion:
  //       "Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.",
  //     videojuegos: ["9", "10", "18"],
  //   },
  //   {
  //     ID: "5",
  //     nombre: "Club de Cazadores de Zombis",
  //     descripcion:
  //       "Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.",
  //     videojuegos: ["2", "13", "17"],
  //   },
  // ];
  // documento.forEach(async (docu) => {
  //   try {
  //     await setDoc(doc(collectionV, docu.ID), docu);
  //     console.log(`Documento con ID ${docu.ID} agregado correctamente.`);
  //   } catch (error) {
  //     console.error(`Error al agregar documento con ID ${docu.ID}:`, error);
  //   }
  // });
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
