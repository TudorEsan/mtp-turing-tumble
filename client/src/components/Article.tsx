import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { Children } from "react";
import { useParams } from "react-router";
import { colors } from "../colors";
import { useArticle } from "../hooks/useArticle";
import { Image } from "./Image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import MDEditor from "@uiw/react-md-editor";

export const Article = () => {
  const { article, loading, error } = useArticle();
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  console.log(
    article?.title.length !== 0,
    article?.title === "",
    article?.title.length
  );

  return (
    <>
      <Box maxWidth="1200px" margin="0 auto">
        <Grid
          container
          spacing={4}
          padding={4}
          justifyContent="center"
          alignItems="center"
        >
          {article?.title.length !== 0 && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                fontFamily="Anton"
                align="center"
                color={colors.blue}
              >
                {article?.title}
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Anton"
                align="center"
                color={colors.blue}
              >
                {article?.shortDescription}
              </Typography>
            </Grid>
          )}
          <Grid sx={{ textAlign: "center" }} item md={6} xs={12}>
            <Image src={article!.image} />
          </Grid>
        </Grid>
        <MDEditor.Markdown
          style={{
            padding: 15,
            maxWidth: "900px",
            margin: "0 auto 350px auto",
            marginBottom: "100px",
          }}
          source={article?.markdownText}
          linkTarget="_blank"
          // previewOptions={{
          //   linkTarget: "_blank"
          // }}
        />
      </Box>
    </>
  );
};
