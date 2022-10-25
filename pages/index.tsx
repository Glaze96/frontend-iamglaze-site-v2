import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const Home: NextPage = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <main className="bg-black">
        <Layout>
          <div className="h-screen bg-black">
            <div className="flex py-14 md:py-28">
              <img
                className="m-auto w-screen md:w-1/2"
                src="/Logo/RECT LOGO_svg.svg"
                alt="logo"
              />
            </div>
            <div className="grid grid-rows-2">
              <h2 className="m-auto text-xl text-center p-6">CHECK OUT: </h2>
              <div className="flex flex-auto m-auto text-lg gap-8 flex-col md:flex-row">
                <Button label="MY ART" callback={() => executeScroll()} />
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
