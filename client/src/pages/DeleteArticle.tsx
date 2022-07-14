import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteArticle } from "../service/articleService";

export const DeleteArticle = () => {
  const { articleType, id } = useParams();
  const navigate = useNavigate();
  const deleteArt = async () => {
    await deleteArticle(articleType as string, id as string);
    navigate(`../${articleType}`);
  };
  useEffect(() => {
    deleteArt();
  }, []);
  return <div>Deleting...</div>;
};
