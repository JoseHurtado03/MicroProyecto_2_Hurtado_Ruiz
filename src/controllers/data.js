import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export async function getClubs() {
  const clubsCollections = collection(db, "Clubes");
  const clubDocs = await getDocs(clubsCollections);
  const clubs = clubDocs.docs.map((doc) => doc.data());
  console.log(clubs);
  return clubs;
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
  const gameDocs = await getDocs(gamesCollections, id);
  const game = gameDocs.data();
  console.log(game);
  return game;
}
