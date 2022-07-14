import styles from "../styles/article.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IArticle from "../types/article";
import { useNavigate } from "react-router";
import { Button, CardActions } from "@mui/material";

interface IArticleProps {
  article: IArticle;
}

export const ArticleCard = ({ article }: IArticleProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hello");
    navigate(`./${article.id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "20px",
        background: "#E5E5E5",
        boxShadow: 10,
        minWidth: "280px",
      }}
    >
      <CardMedia
        component="img"
        alt="a very nice picture"
        height="180"
        image={article.image}
        sx={{ color: "red" }}
      />
      <CardContent>
        <Typography color="black" gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => handleClick()}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
