import React, { useEffect } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";
import {
  addTuringArticle,
  getArticles,
  getTuringArticles,
} from "../service/articleService";
import IArticle from "../types/article";
interface IUseArticle {
  forArticles: string;
}
export const useArticles = (forArticle: string) => {
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<null | string>(null);
  const { articleType } = useParams();

  const initArticles = async () => {
    try {
      const art = await getArticles(forArticle);
      setArticles(art);
      setLoading(false);
    } catch (error) {
      setError("There was an error while loading the articles");
      setLoading(false);
    }
  };
  useEffect(() => {
    initArticles();
  }, []);
  return {
    articles,
    loading,
    error,
  };
};
