import { Box, Button, Grid, TextField } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { addArticle, saveImage } from "../service/articleService";
import IArticle from "../types/article";

export const AddArticle = () => {
  const [title, setTitle] = React.useState<string | undefined>("");
  const [shortDescription, setShortDescription] = React.useState<
    string | undefined
  >("");
  const [image, setImage] = React.useState<string | undefined>("");
  const [markdownText, setMarkdownText] = React.useState<string | undefined>(
    ""
  );
  const { articleType } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const path = await saveImage(image);
      const article = {
        title,
        shortDescription,
        image: path,
        markdownText,
        articleType,
      } as IArticle;
      const id = await addArticle(article, articleType as string);
      navigate(`../${articleType}/${id}`);
    } catch (e) {
      console.error(e);
    }
  };
  const handleFileChange = (e: any) => {
    setImage(e.target.files[0]);
  };
  return (
    <Box maxWidth="1200px" className="container" padding={4}>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item sm={12}>
          <TextField
            fullWidth
            label="Title"
            InputLabelProps={{
              style: { color: "black" },
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            fullWidth
            label="Short Description"
            InputLabelProps={{
              style: { color: "black" },
            }}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <input accept="image/*" type="file" onChange={handleFileChange} />
        </Grid>
      </Grid>
      <div data-color-mode="light">
        <MDEditor
          color="secondary"
          preview="edit"
          value={markdownText}
          height={800}
          minHeight={900}
          style={{ border: "1px solid #ccc" }}
          onChange={setMarkdownText}
        />
      </div>
      <Button onClick={handleSubmit}>Save</Button>
    </Box>
  );
};
