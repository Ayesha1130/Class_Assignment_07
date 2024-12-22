import Loader from "@/components/Loader";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-950 h-screen">
      <div className="text-center justify-center items-center h-screen flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:4xl font-bold italic ">
          Class Assignment 07 Data Fetching
        </h1>
        <p className="w-96">
          This is a simple demonstration of client-side and server-side data
          fetching in Next.js.
        </p>
        <Link
          href={"/serverside"}
          className="py-2 px-10 bg-pink-600 rounded-md mt-5 hover:scale-95 hover:bg-emerald-500"
        >
          Server side
        </Link>
        <Link
          href={"/clientside"}
          className="py-2 px-10 bg-pink-600 rounded-md mt-5 hover:scale-95 hover:bg-emerald-500"
        >
          Client side
        </Link>
      </div>
      <Loader />
    </div>
  );
};

export default Home;
