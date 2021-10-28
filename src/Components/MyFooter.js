import { Container, Link, Typography } from "@mui/material";
import React from "react";

const MyFooter = ({ title, description }) => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom paddingTop={1}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          paddingBottom={1}
        >
          Copyright ©{" "}
          <Link color="inherit" href="https://mui.com/">
            Material UI
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
};

export default MyFooter;
