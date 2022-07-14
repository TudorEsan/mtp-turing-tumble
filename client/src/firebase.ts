import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import IArticle from "./types/article";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuIUkZ206Jy1jY7yD-IZlyBIE4jvD-0Ts",
  authDomain: "turing-tumble.firebaseapp.com",
  projectId: "turing-tumble",
  storageBucket: "gs://turing-tumble.appspot.com",
  messagingSenderId: "126779583105",
  appId: "1:126779583105:web:eb91d3f2e0d7eb82143b80",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const turingArticlesCol = createCollection<IArticle>("turing-tumble");
export const hitchhikeArticlesCol = createCollection<IArticle>("hitchhike");
