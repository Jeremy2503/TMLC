import Head from "next/head";
import { useState } from "react"; //React Hook for State

// Material
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material";




import { useDispatch, useSelector } from "react-redux";

import MyAppBar from "@/component/common/MyAppBar";
import { selectTheme } from "../../redux/reducesrs/themeReduces";
import { darktheme, lighttheme } from "@/styles/mui/theme";

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  // const [currentTheme, setCurrentTheme] = useState("light");

  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darktheme : lighttheme}>
        <CssBaseline />
        <Head>
          <title>
            Blog | The Movie Lovers Club | Your Favourite Movie Articles!
          </title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <Box></Box>
      </ThemeProvider>
    </>
  );
}