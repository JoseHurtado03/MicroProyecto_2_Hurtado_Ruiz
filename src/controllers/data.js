import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export async function getClubs() {
  const clubsCollections = collection(db, "Clubes");
  const clubDocs = await getDocs(clubsCollections);
  const clubs = clubDocs.docs.map((doc) => doc.data());
  console.log(clubs);
  return clubs;
}

export async function updateProfile(
  id,
  { email, lastName, name, pref_game, username }
) {
  const usersCollections = collection(db, "users");
  await updateDoc(doc(usersCollections, id), {
    email,
    lastName,
    name,
    pref_game,
    username,
  });
}

export async function getClubsByID(id) {
  const clubsCollection = collection(db, "Clubes");
  const clubDocRef = doc(clubsCollection, id); // Create a reference to the specific document
  const clubDoc = await getDoc(clubDocRef); // Pass the document reference to getDoc
  const club = clubDoc.data();
  return club;
}

export async function getGames() {
  const gamesCollections = collection(db, "Videojuegos");
  const gameDocs = await getDocs(gamesCollections);
  const games = gameDocs.docs.map((doc) => doc.data());
  console.log(games);
  return games;
}

export async function getGamesByID(id) {
  const gamesCollections = collection(db, "Videojuegos");
  const gameDocRef = doc(gamesCollections, id);
  const gameDoc = await getDoc(gameDocRef);
  const game = gameDoc.data();
  console.log(game);
  return game;
}

export async function getGamesByGenre(genre) {
  const gamesCollections = collection(db, "Videojuegos");
  const gameDocs = await getDocs(gamesCollections);
  const games = gameDocs.docs
    .map((doc) => doc.data())
    .filter((game) => game.genero.toLowerCase() === genre.toLowerCase());
  console.log(games);
  return games;
}

export async function getUserByID(id) {
  const usersCollections = collection(db, "users");
  const userDocRef = doc(usersCollections, id);
  const userDoc = await getDoc(userDocRef);
  const user = userDoc.data();
  console.log(user);
  return user;
}
