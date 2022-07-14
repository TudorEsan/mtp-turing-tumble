import { Box } from "@mui/material";
import { maxHeight } from "@mui/system";
import React from "react";

interface ImageProps {
  src: string;
  rest?: any;
}

export const Image = ({ src, ...rest }: ImageProps) => {
  return (
    <Box textAlign="center">
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          ...rest,
          margin: "auto",
          borderRadius: "25px",
        }}
        src={src}
        alt="random image"
      />
    </Box>
  );
};
