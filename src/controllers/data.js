import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getClubs(){
    const clubsCollections = collection(db, 'Clubes')
    const clubDocs = await getDocs(clubsCollections)
    const clubs = clubDocs.docs.map((doc) => doc.data())
    console.log(clubs)
    return clubs
}

export async function getClubsByID(id){
    const clubsCollections = collection(db, 'Clubes');
    const clubDoc = await getDoc(clubsCollections, id);
    const club = clubDoc.data();
    console.log(club)
    return club
}

export async function getGames(){
    const gamesCollections = collection(db, 'Videojuegos')
    const gameDocs = await getDocs(gamesCollections);
    const games = gameDocs.docs.map((doc) => doc.data())
    console.log(games)
    return games
}

export async function getGamesByID(){
    const gamesCollections = collection(db, 'Videojuegos')
    const gameDocs = await getDocs(gamesCollections, id);
    const game = gameDocs.data()
    console.log(game)
    return game
}