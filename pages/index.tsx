import React, { useRef, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";
import ImageButton from "../components/ImageButton";
import Icon from "../components/Misc/Icon";
import SectionDivider from "../components/Layout/SectionDivider";

import glazePicture from "../public/Resources/pfp.jpg";

import { HiOutlineExternalLink } from "react-icons/hi";

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

import { FaArrowCircleUp } from "react-icons/fa";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const Home: NextPage = () => {
	const [isVisible, setIsVisible] = useState(false);

	const landingSectionRef = useRef(null);
	const artSectionRef = useRef(null);
	const musicSectionRef = useRef(null);
	const aboutSectionRef = useRef(null);
	const programmingSectionRef = useRef(null);
	const executeScroll = (sectionRef: any) => scrollToRef(sectionRef);

	useEffect(() => {
		let getMeTo = document.getElementById(window.location.hash);
		getMeTo?.scrollIntoView({ behavior: "smooth" });
	}, []);

	const listenToScroll = () => {
		let heightToHideFrom = screen.height - 200;

		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll < heightToHideFrom) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<div>
			<Head>
				<title>I Am Glaze - Site</title>
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="A website made by Glaze, about Glaze"
					key="desc"
				/>
			</Head>
			<main className="bg-black">
				<Parallax speed={-40} className="absolute w-full h-screen">
					<Image
						src="/bg-pattern.svg"
						fill
						objectFit="cover"
						alt="background"
						style={{
							WebkitMaskImage:
								"-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
						}}
					/>
				</Parallax>
				{isVisible && (
					<div className="fixed w-fit top-5 pl-5 z-20 hidden md:block sm-phone:hidden">
						<Button.Icon
							icon={<FaArrowCircleUp />}
							callback={() => executeScroll(landingSectionRef)}
						/>
					</div>
				)}
				<Layout>
					<div
						ref={landingSectionRef}
						className="w-full h-screen sm-phone:h-full z-10"
					>
						<div className="flex items-center flex-col py-14 md:py-28 h-full sm-phone:flex-row sm-phone:py-0">
							<div className="relative w-full h-full md:w-1/2 md:h-1/2 sm-phone:h-screen">
								<Image src="/Logo/RECT LOGO_svg.svg" fill alt="logo" />
							</div>
							<div className="flex flex-col">
								<div className="self-center mx-auto text-center">
									<Button.Link
										label="Interested in commissions?"
										url="/commission"
										sameTab
									/>
								</div>
								<h2 className="m-auto text-lg md:text-xl text-center p-6 font-bold sm-phone:text-lg sm-phone:p-2">
									CHECK OUT:
								</h2>
								<div className="flex flex-auto m-auto text-lg gap-8 flex-col md:flex-row sm-phone:flex-col sm-phone:gap-2 place-content-center flex-wrap">
									<div className="w-80">
										<Button
											label="MY ART"
											section="art"
											callback={() => executeScroll(artSectionRef)}
										/>
									</div>
									<div className="w-80">
										<Button
											label="MY MUSIC"
											section="music"
											callback={() => executeScroll(musicSectionRef)}
										/>
									</div>
									<div className="w-80">
										<Button
											label="MY PROGRAMMING"
											section="programming"
											callback={() => executeScroll(programmingSectionRef)}
										/>
									</div>
									<div className="w-80">
										<Button
											label="GLAZE"
											section="about"
											callback={() => executeScroll(aboutSectionRef)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Layout>
				<Layout>
					<div
						id="#art"
						ref={artSectionRef}
						className="flex flex-col h-fit z-10"
					>
						<SectionDivider label="ART" />
						<div className="h-screen hidden md:block sm-phone:hidden">
							<div className="absolute w-3/4 h-3/4">
								<ImageButton
									label="2D: Instagram"
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
									label="3D: ArtStation"
									imageUrl="Resources/3d.jpg"
									linkUrl="https://www.artstation.com/glaze"
									textPos="bottom"
									cPath="polygon(100% 0, 0% 100%, 100% 100%)"
									zInd={1}
									alt="artstation image"
								/>
							</div>
						</div>
						<div className="md:hidden flex flex-col gap-4 py-4 sm-phone:block sm-phone:px-20">
							<Button.Link
								label="Instagram"
								url="https://www.instagram.com/i_am_the_real_glaze/"
								icon={<HiOutlineExternalLink />}
							/>
							<Button.Link
								label="Art Station"
								url="https://www.artstation.com/glaze"
								icon={<HiOutlineExternalLink />}
							/>
						</div>
					</div>
				</Layout>
				<div className="bg-blackSecondary">
					<Layout>
						<div
							id="#music"
							ref={musicSectionRef}
							className="flex flex-col z-10"
						>
							<SectionDivider label="MUSIC" />
							<div className="flex flex-col md:flex-row py-10 md:py-20 gap-8 md:mx-auto w-full md:w-2/3 sm-phone:flex-col">
								<div className="md:w-1/2">
									<h2 className="text-lg w-full md:text-xl">I Am Glaze</h2>
									<p className="text-base">... is my solo music project.</p>
									<div className="flex flex-col md:flex-row gap-6 py-6">
										<div className="w-40">
											<Button.Link
												icon={<HiOutlineExternalLink />}
												label="Spotify"
												url="https://open.spotify.com/artist/6gAx05BlEJQcHp7mMVi3eM"
											/>
										</div>
										<div className="w-40">
											<Button.Link
												icon={<HiOutlineExternalLink />}
												label="Youtube"
												url="https://www.youtube.com/channel/UCXh8mqVGRwUhQvT5ZZG-w0g"
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
											<Button.Link
												icon={<HiOutlineExternalLink />}
												label="Website"
												url="http://www.innermixmusic.com/"
											/>
										</div>
										<div className="w-40">
											<Button.Link
												icon={<HiOutlineExternalLink />}
												label="Youtube"
												url="https://www.youtube.com/channel/UCtbHyCDGZA6pmNVEKWjORdg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Layout>
				</div>
				<Layout>
					<div
						id="#programming"
						ref={programmingSectionRef}
						className="flex flex-col"
					>
						<SectionDivider label="PROGRAMMING" />
						<div className="flex flex-col md:flex-row py-10 md:py-20 gap-8 md:mx-auto w-full md:w-2/3 sm-phone:flex-col">
							<div className="w-full h-full">
								<h2 className="text-lg md:text-xl">Technologies</h2>
								<div>
									<h3 className="text-lg p-5">Web</h3>
									<div className="flex flex-grow flex-row w-fit gap-5 md:p-5">
										<Icon.Hover
											label="React"
											icon={<SiReact />}
											size="text-xl"
										/>
										<Icon.Hover
											label="Next.js"
											icon={<SiNextdotjs />}
											size="text-xl"
										/>
										<Icon.Hover
											label="TypeScript"
											icon={<SiTypescript />}
											size="text-xl"
										/>
										<Icon.Hover
											label="Styled"
											icon={<SiStyledcomponents />}
											size="text-xl"
										/>
									</div>
								</div>
								<div>
									<h3 className="text-lg p-5">Languages</h3>
									<div className="flex flex-grow flex-row w-fit gap-5 md:p-5">
										<Icon.Hover
											label="Javascript"
											icon={<SiJavascript />}
											size="text-xl"
										/>
										<Icon.Hover
											label="C++"
											icon={<SiCplusplus />}
											size="text-xl"
										/>
										<Icon.Hover label="C#" icon={<SiCsharp />} size="text-xl" />
										<Icon.Hover
											label="Python"
											icon={<SiPython />}
											size="text-xl"
										/>
									</div>
								</div>
								<div>
									<h3 className="text-lg p-5">Other</h3>
									<div className="flex flex-row w-fit gap-5 md:p-5">
										<Icon.Hover
											label="Unity"
											icon={<SiUnity />}
											size="text-xl"
										/>
										<Icon.Hover
											label="Github"
											icon={<SiGithub />}
											size="text-xl"
										/>
										<Icon.Hover
											label="Figma"
											icon={<SiFigma />}
											size="text-xl"
										/>
									</div>
								</div>
							</div>
							<div className="w-full">
								<h2 className="text-lg md:text-xl">Links</h2>
								<div className="w-60 p-5">
									<Button.Link
										label="Github"
										url="https://github.com/Glaze96/"
										icon={<HiOutlineExternalLink />}
									/>
								</div>
							</div>
						</div>
					</div>
				</Layout>
				<div id="#about" className="bg-blackSecondary">
					<Layout>
						<div
							ref={aboutSectionRef}
							className="md:h-screen h-fit py-2 flex flex-col sm-phone:h-fit"
						>
							<SectionDivider label="GLAZE" />
							<div className="flex flex-col-reverse gap-2 md:flex-row md:gap-20 md:py-20 mx-auto md:w-2/3 sm-phone:flex-col-reverse sm-phone:gap-2 sm-phone:py-0">
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
									<Image src={glazePicture} alt="profile picture" />
								</div>
							</div>
							<div className="text-center mx-auto">
                <p className="text-lg">Do you like what I do?</p>
								<Button.Link
									label="I'm taking Commissions"
									url="/commission"
									sameTab
								/>
							</div>
						</div>
					</Layout>
				</div>
			</main>
			<footer></footer>
		</div>
	);
};

export default Home;
