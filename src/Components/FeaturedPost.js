import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1633105096371-b70eb1351b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTAxNDI4OQ&ixlib=rb-1.2.1&q=80&w=1080)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "35px 25px",
  },
  btn: {},
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" className={classes.btn}>
          Read More . . .
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
