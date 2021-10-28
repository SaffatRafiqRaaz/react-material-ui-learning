import "./App.css";
import { Container, Grid } from "@mui/material";
import React from "react";
import Header from "./Components/Header";
import FeaturedPost from "./Components/FeaturedPost";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { featuredPosts, sidebar } from "./Data/Data";
import PostCard from "./Components/PostCard";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

import MyFooter from "./Components/MyFooter";
import { Box } from "@mui/system";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} marginTop={1}>
          <Main title="From the firehose" />

          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Container>
        <Box
          component="footer"
          sx={{
            backgroundColor: "ThreeDDarkShadow",
            marginTop: 4,
            padding: (6, 0),
          }}
        >
          <MyFooter
            title="Footer title"
            description="This is my React Material UI learning project"
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
