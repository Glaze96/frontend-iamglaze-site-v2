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
                className="m-auto w-screen md:w-1/3"
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
          <div ref={myRef} className="h-screen flex flex-col">
            <div className="w-full flex place-items-center p-10">
              <h2 className="flex place-content-center text-xl w-80">MY ART</h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>

            <div className="h-screen flex flex-row">
              <div className="w-1/2 overflow-hidden">
                <div className="h-full bg-[url('../public/Resources/2d.jpg')] bg-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all">
                  <div className="w-full h-full grid place-content-center">
                    <h3 className="text-xl select-none">Instagram</h3>
                  </div>
                </div>
              </div>

              <div className="w-1/2 overflow-hidden">
                <div className="h-full bg-[url('../public/Resources/3d.jpg')] bg-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all">
                  <div className="w-full h-full grid place-content-center">
                    <h3 className="text-xl select-none">Art Station</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div ref={myRef} className="flex flex-col h-screen">
            <div className="absolute w-full flex place-items-center p-12">
              <h2 className="flex place-content-center text-xl w-80">MY ART</h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>
            <div className="h-screen bg-[url('../public/Resources/2d.jpg')] bg-cover"></div>
          </div> */}
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
