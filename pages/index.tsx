import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";
import ImageButton from "../components/ImageButton";
import Icon from "../components/Misc/Icon";
import SectionDivider from "../components/Layout/SectionDivider";

import glazePicture from "../public/Resources/pfp.jpg";

import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiUnity,
  SiCsharp,
  SiPython,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const Home: NextPage = () => {
  const artSectionRef = useRef(null);
  const musicSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const programmingSectionRef = useRef(null);
  const executeScroll = (sectionRef: any) => scrollToRef(sectionRef);

  return (
    <div>
      <main className="bg-black p-">
        <Layout>
          <div className="w-full h-screen">
            <div className="">
              <Image
                src="/bg-pattern.svg"
                layout="fill"
                objectFit="cover"
                alt="background"
                style={{
                  WebkitMaskImage:
                    "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                }}
              />
            </div>
            <div className="flex items-center flex-col py-14 md:py-28 h-full">
              <div className="relative w-full h-full md:w-1/2 md:h-1/2">
                <Image src="/Logo/RECT LOGO_svg.svg" layout="fill" alt="logo" />
              </div>
              <div className="flex flex-col  z-10">
                <h2 className="m-auto text-lg md:text-xl text-center p-6 font-bold">
                  CHECK OUT:
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
          </div>
        </Layout>
        <Layout>
          <div ref={artSectionRef} className="h-screen flex flex-col">
            <SectionDivider label="ART" />
            <div className="h-full hidden md:block">
              <div className="absolute w-3/4 h-3/4">
                <ImageButton
                  label="Instagram"
                  imageUrl="Resources/2d.jpg"
                  linkUrl="https://www.instagram.com/i_am_the_real_glaze/"
                  textPos="top"
                  cPath="polygon(100% 0, 0 0, 0 100%)"
                  zInd={2}
                  alt="instagram image"
                />
              </div>
              <div className="absolute w-3/4 h-3/4">
                <ImageButton
                  label="ArtStation"
                  imageUrl="Resources/3d.jpg"
                  linkUrl="https://www.artstation.com/glaze"
                  textPos="bottom"
                  cPath="polygon(100% 0, 0% 100%, 100% 100%)"
                  zInd={1}
                  alt="artstation image"
                />
              </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 py-4">
              <Button
                label="Instagram"
                url="https://www.instagram.com/i_am_the_real_glaze/"
              />
              <Button
                label="Art Station"
                url="https://www.artstation.com/glaze"
              />
            </div>
          </div>
        </Layout>
        <Layout>
          <div ref={musicSectionRef} className="h-screen flex flex-col">
            <SectionDivider label="MUSIC" />

            <div className="flex flex-col md:flex-row py-10 md:py-20 gap-8 md:mx-auto w-full md:w-2/3">
              <div className="md:w-1/2">
                <h2 className="text-lg w-full md:text-xl">I Am Glaze</h2>
                <p className="text-base">... is my solo music project.</p>
                <div className="flex flex-col md:flex-row gap-6 py-6">
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
              <div className="w-full md:w-1/2">
                <h2 className="text-lg md:text-xl">Inner Mix</h2>
                <p className="text-base">
                  ... is a music group. I am the producer.
                </p>
                <div className="flex flex-col md:flex-row gap-6 py-6">
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
                      url="https://www.youtube.com/channel/UCtbHyCDGZA6pmNVEKWjORdg"
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
            <SectionDivider label="PROGRAMMING" />
            <div className="flex flex-col md:flex-row py-10 md:py-20 gap-8 md:mx-auto w-full md:w-2/3">
              <div className="w-full h-full">
                <h2 className="text-md md:text-xl">Technologies</h2>
                <div>
                  <h2 className="text-lg p-5">Web</h2>
                  <div className="flex flex-grow flex-row w-fit gap-5 md:p-5">
                    <Icon icon={<SiReact />} />
                    <Icon icon={<SiNextdotjs />} />
                    <Icon icon={<SiTypescript />} />
                    <Icon icon={<SiStyledcomponents />} />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg p-5">Languages</h2>
                  <div className="flex flex-grow flex-row w-fit gap-5 md:p-5">
                    <Icon icon={<SiJavascript />} />
                    <Icon icon={<SiCplusplus />} />
                    <Icon icon={<SiCsharp />} />
                    <Icon icon={<SiPython />} />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg p-5">Other</h2>
                  <div className="flex flex-row w-fit gap-5 md:p-5">
                    <Icon icon={<SiUnity />} />
                    <Icon icon={<SiGithub />} />
                    <Icon icon={<SiFigma />} />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-md md:text-xl">Links</h2>
                <div className="w-60 p-5">
                  <Button label="Github" url="https://github.com/Glaze96/" />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div
            ref={aboutSectionRef}
            className="md:h-screen h-fit py-2 flex flex-col"
          >
            <SectionDivider label="GLAZE" />
            <div className="flex flex-col-reverse md:flex-row md:gap-20 md:py-20 mx-auto md:w-2/3">
              <p className="text-base">
                Hi, I Am Glaze. I love making stuff. Creating art has always
                been a passion of mine. I started my endeavors in digital art
                and after that I fell in love with more techincal creative
                fields like programming and 3d modelling. Also, I adore music,
                both listening to it and creating it. I generally have an easy
                time picking up and learning new software. I have a wonderful
                girlfriend, a couple of awesome dogs and an amazing family.
              </p>
              <div>
                <Image src={glazePicture} alt="profile picture"/>
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
