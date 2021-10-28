import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,

    "@media (max-width:900px)": {
      width: "inherit",
      height: 160,
      justifyContent: "center",
      borderRadius: 3,
      marginBottom: 25,
    },
  },
});

const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea LinkComponent="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <CardMedia
                sx={{ display: { md: "none", xs: "block" } }}
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
              />
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading . . .
              </Typography>
            </CardContent>
          </div>

          <CardMedia
            sx={{ display: { md: "block", xs: "none" } }}
            className={classes.cardMedia}
            image={post.image}
            title={post.imageTitle}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
