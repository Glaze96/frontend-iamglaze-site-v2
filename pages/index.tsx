import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";
import ImageButton from "../components/ImageButton";

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

            <div className="flex flex-row h-1/2">
              <div
                className="h-full overflow-y-auto w-full"
                style={{
                  clipPath: "polygon(0 0, 25% 0, 75% 100%, 0 100%)",
                  zIndex: 1,
                }}
              >
                <ImageButton
                  label="Instagram"
                  imageUrl="Resources/2d.jpg"
                  linkUrl="https://www.instagram.com/i_am_the_real_glaze/"
                />
              </div>
              <div className="absolute h-1/2 overflow-y-auto w-3/4">
                <ImageButton
                  label="ArtStation"
                  imageUrl="Resources/3d.jpg"
                  linkUrl="https://www.artstation.com/glaze"
                />
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
