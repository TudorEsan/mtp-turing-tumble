import { Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { stringify } from "querystring";
import React from "react";
import { addTuringArticle } from "../service/articleService";
import IArticle from "../types/article";

export const Editor = () => {
  const handleSubmit = async () => {
    const article = {
      title: "new atricle",
      shortDescription: "A short description of the project",
      image: "https://source.unsplash.com/random/300x200",
      markdownText: `# Demo
Line 1${"  "}
Line 2${"  "}
Line 3
      `,
    } as IArticle;
    await addTuringArticle(article);
  };
  return <Button onClick={handleSubmit}>Submit</Button>;
};
