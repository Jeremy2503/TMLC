import Head from "next/head";
import { useState } from "react";

//MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyAppBar from "./component/MyAppBar";


export default function Home() {
  let [visible, setVisible] = useState(false);

  const movies = [
    {
      name: "The Price of Confession",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.netflix.com%2Fnews%2Fthe-price-of-confession-december-5&psig=AOvVaw0kjgcps7_KM2o8D2eX51sr&ust=1765534069037000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj2oIqltZEDFQAAAAAdAAAAABAE",
      desc: "Directed By Lee Jung-hyo",
    },
    {
      name: "The abandons",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt16280546%2F&psig=AOvVaw0yIPy-e80P3__WUNGDaSmD&ust=1765534225033000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiHmNSltZEDFQAAAAAdAAAAABAE",
      desc: "Direct By Kurt Sutter"
    },
  ];
  return (
    <>

      <Head>
        <title>The Movie Lovers Club</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MyAppBar />
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>

        <Box height="200px" />
        {visible ? (
          <Box height="200px" sx={{ background: "pink", width: "500px" }} />) : (<> </>)
        }



      </div>

    </>
  );
}
