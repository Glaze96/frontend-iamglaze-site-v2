import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";
import ImageButton from "../components/ImageButton";

import glazePicture from "../public/Resources/pfp.jpg";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const Home: NextPage = () => {
  const artSectionRef = useRef(null);
  const musicSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const programmingSectionRef = useRef(null);
  const executeScroll = (sectionRef: any) => scrollToRef(sectionRef);

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
              <h2 className="m-auto text-xl text-center p-6 font-bold">
                CHECK OUT:{" "}
              </h2>
              <div className="flex flex-auto m-auto text-lg gap-8 flex-col md:flex-row">
                <div className="w-80">
                  <Button
                    label="MY ART"
                    callback={() => executeScroll(artSectionRef)}
                  />
                </div>
                <div className="w-80">
                  <Button
                    label="MY MUSIC"
                    callback={() => executeScroll(musicSectionRef)}
                  />
                </div>
                <div className="w-80">
                  <Button
                    label="MY PROGRAMMING"
                    callback={() => executeScroll(programmingSectionRef)}
                  />
                </div>
                <div className="w-80">
                  <Button
                    label="GLAZE"
                    callback={() => executeScroll(aboutSectionRef)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={artSectionRef} className="h-screen flex flex-col">
            <div className="w-full flex place-items-center p-10">
              <h2 className="flex place-content-center text-xl w-80 font-bold">
                MY ART
              </h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>
            <div className="flex flex-row h-3/4">
              <div
                className="h-full w-full"
                style={{
                  clipPath: "polygon(0 0, 75% 0, 25% 100%, 0 100%)",
                  zIndex: 1,
                }}
              >
                <ImageButton
                  label="Instagram"
                  imageUrl="Resources/2d.jpg"
                  linkUrl="https://www.instagram.com/i_am_the_real_glaze/"
                  textPos="top"
                />
              </div>
              <div className="absolute h-3/4 w-3/4">
                <ImageButton
                  label="ArtStation"
                  imageUrl="Resources/3d.jpg"
                  linkUrl="https://www.artstation.com/glaze"
                  textPos="bottom"
                />
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={musicSectionRef} className="h-screen flex flex-col">
            <div className="w-full flex place-items-center p-10">
              <h2 className="flex place-content-center text-xl w-80 font-bold">
                MY MUSIC
              </h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>
            <div className="flex flex-row py-20 mx-auto w-2/3">
              <div className="w-1/2">
                <h2 className="text-xl">I Am Glaze</h2>
                <p className="text-base">
                  ‘I Am Glaze’ is my solo music project.
                </p>
                <div className="flex flex-row gap-6 py-6">
                  <div className="w-40">
                    <Button
                      label="Spotify"
                      url="https://open.spotify.com/artist/6gAx05BlEJQcHp7mMVi3eM"
                      newtab
                    />
                  </div>
                  <div className="w-40">
                    <Button
                      label="Youtube"
                      url="https://www.youtube.com/channel/UCXh8mqVGRwUhQvT5ZZG-w0g"
                      newtab
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <h2 className="text-xl">Inner Mix</h2>
                <p className="text-base">
                  ‘Inner Mix’ is a music group I’m in, as a role of the producer
                </p>
                <div className="flex flex-row gap-6 py-6">
                  <div className="w-40">
                    <Button
                      label="Website"
                      url="http://www.innermixmusic.com/"
                      newtab
                    />
                  </div>
                  <div className="w-40">
                    <Button
                      label="Youtube"
                      url="https://open.spotify.com/artist/6gAx05BlEJQcHp7mMVi3eM"
                      newtab
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={programmingSectionRef} className="h-screen flex flex-col">
            <div className="w-full flex place-items-center p-10">
              <h2 className="flex place-content-center text-xl w-80 font-bold">
                MY PROGRAMMING
              </h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={aboutSectionRef} className="h-screen flex flex-col">
            <div className="w-full flex place-items-center p-10">
              <h2 className="flex place-content-center text-xl w-80 font-bold">
                ABOUT GLAZE
              </h2>
              <div className="pr-12 w-full">
                <div className="flex-grow border-4 border-spacing-x-80"></div>
              </div>
            </div>
            <div className="flex flex-row gap-20 py-20 mx-auto w-2/3">
              <p className="text-base">
                Hi, I Am Glaze. I love making stuff. Creating art has always
                been a passion of mine. I started my endeavors in digital art
                and after that I fell in love with more techincal creative
                fields like programming and 3d modelling. Also, I adore music,
                both listening to it and creating it. Here's some programs I
                work with: Blender, FL Studio, Photoshop, Adobe Illustrator and
                Figma. Other than those, I generally have an easy time picking
                up and learning new software. I have a wonderful girlfriend, a
                couple of awesome dogs and an amazing family.
              </p>
              <div>
                <Image src={glazePicture} />
              </div>
            </div>
          </div>
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
