import Head from "next/head";
import { useEffect } from "react";
import NavBar from "./../src/layout/Navbar";
import Feed from "./../src/components/Feed";
import FollowCard from "./../src/components/FollowCard"

export default function Dashboard({ }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Dashboard - 3Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pt-20 text-center">
        <FollowCard />
        <Feed />
      </main>
    </div>
  );
}
