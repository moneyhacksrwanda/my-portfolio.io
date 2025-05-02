import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Hero from "../src/components/Hero";
import Info from "../src/components/Info";
import { homeObjOne, contactObj } from "../src/components/Info/Data";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Projects from "../src/components/Projects"
import Contact from "../src/components/Contact";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="home">
      <Head>
        <title>Vinu Jey Portfolio</title>
        <meta name="description" content="Vinu Jey Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Hero />
      <Info {...homeObjOne} />
      <Projects />
      <Contact {...contactObj} />
    </div>
  );
};

export default Home;
