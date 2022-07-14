import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  firestore,
  turingArticlesCol,
  storage,
  hitchhikeArticlesCol,
} from "../firebase";
import IArticle from "../types/article";

export const getArticles = async (articleType: string) => {
  console.log(articleType);
  if (articleType === "turing-tumble") {
    console.log("hello");
    return getTuringArticles();
  }
  return getHichhikeArticles();
};

export const getHichhikeArticles = async () => {
  const articles = await getDocs(hitchhikeArticlesCol);
  return articles.docs.map((tur) => {
    return { ...tur.data(), id: tur.id };
  });
};

export const getTuringArticles = async () => {
  const articles = await getDocs(turingArticlesCol);
  return articles.docs.map((tur) => {
    return { ...tur.data(), id: tur.id };
  });
};


export const deleteArticle = async (articleType: string, id: string) => {
    const ref = doc(firestore, articleType, id);
    return deleteDoc(ref)
};

export const addTuringArticle = async (article: IArticle) => {
  const tur = await addDoc(turingArticlesCol, article);
  return tur;
};

export const getArticle = async (articleType: string, id: string) => {
  const ref = doc(firestore, articleType, id);
  const article = await getDoc(ref);
  return { ...article.data(), id: article.id } as IArticle;
};

export const addArticle = async (article: IArticle, articleType: string) => {
  const ref = collection(firestore, articleType);
  const art = await addDoc(ref, article);
  return art.id;
};

export const saveImage = async (file: any) => {
  const storageRef = ref(storage, `${file.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  return getDownloadURL(uploadTask.ref);
};
