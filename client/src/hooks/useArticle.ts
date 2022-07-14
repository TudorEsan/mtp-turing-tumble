import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getArticle } from "../service/articleService";
import IArticle from "../types/article";

export const useArticle = () => {
  const { articleType, id } = useParams();
  const [article, setArticle] = React.useState<IArticle>();
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(true);

  const initArticle = async () => {
    try {
      const art = await getArticle(articleType as string, id as string);
      setArticle(art);
    } catch (error) {
      setError("There was an error while loading the article");
    }
    setLoading(false);
  };
  useEffect(() => {
    initArticle();
  }, []);
  return {
    article,
    error,
    loading,
  };
};
