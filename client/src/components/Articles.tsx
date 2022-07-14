import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useArticles } from "../hooks/useArticles";
import { ArticleCard } from "./ArticleCard";

interface ArticleProps {
  forArticle: string;
}

export const Articles = ({ forArticle }: ArticleProps) => {
  const { articles, loading } = useArticles(forArticle);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })}
    </Box>
  );
};
