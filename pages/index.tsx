import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";

const scrollToRef = (ref : any) => window.scrollTo(0, ref.current.offsetTop);

const Home: NextPage = () => {

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <main className="bg-black">
        <Layout>
          <div className="h-screen bg-black">
            <div className="flex py-20">
              <img
                className="m-auto w-screen md:w-1/2"
                src="/Logo/RECT LOGO_svg.svg"
                alt="logo"
              />
            </div>
            <div className="flex m-auto">
              <div className="flex m-auto text-lg gap-3 flex-col md:flex-row">
                <h2 className="m-auto">CHECK OUT: </h2>
                <Button label="MY ART" callback={() => executeScroll()}/>
                <Button label="MY MUSIC" />
                <Button label="ME!" />
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={myRef} className="h-screen bg-secondary">
            <h2 className="text-lg">MY ART</h2>
          </div>
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
