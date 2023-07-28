import Head from "next/head";
import { Typography, Card } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Material Tailwind + Next.js</title>
      </Head>
      <div className="relative grid min-h-[100vh] w-screen p-8">
        FINALLY I see happiness 
      </div>
    </>
  );
}
