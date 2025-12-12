import Head from "next/head";
import Link from "next/link";
import MyAppBar from "./component/MyAppBar";




export default function Home() {

    return (
        <>
            <Head>
                <title>Blog | The Movie Lovers Club</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyAppBar />
            <div>
                Blog

            </div>

        </>
    );
}
