import { Button, CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ControlledTextField } from "../components/CotrolledTextField";
import { useArticle } from "../hooks/useArticle";

export const EditArticle = () => {
  const { article, loading } = useArticle();
  const {
    register,
    handleSubmit,
    control,
    formState,
    getValues,
    setValue,
    reset,
  } = useForm({
    defaultValues: article,
  });
  const [markdownText, setMarkdownText] = useState<string>("");

  useEffect(() => {
    setMarkdownText(article?.markdownText as string);
    reset(article);
  }, [article]);

  if (loading) {
    return <CircularProgress />;
  }
  console.log(getValues());
  return (
    <Box maxWidth="1200px" className="container" padding={4}>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item sm={12}>
          <ControlledTextField label="Title" control={control} name="title" />
        </Grid>
        <Grid item sm={12}>
          <ControlledTextField
            label="Short Description"
            control={control}
            name="shortDescription"
          />
        </Grid>
        <Grid item sm={12}>
          <input {...register("image")} accept="image/*" type="file" />
        </Grid>
      </Grid>
      <div data-color-mode="light">
        <MDEditor
          data-color-mode="light"
          preview="edit"
          value={markdownText}
          height={800}
          minHeight={900}
          style={{ border: "1px solid #ccc" }}
          onChange={(value) => {
            setMarkdownText(value as string);
          }}
        />
      </div>
      <Button type="submit">Save</Button>
    </Box>
  );
};
