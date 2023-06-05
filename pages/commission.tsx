import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";
import ImageButton from "../components/ImageButton";
import SimpleImageButton from "../components/SimpleImageButton";
import { HiOutlineExternalLink } from "react-icons/hi";

const CommissionPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>I Am Glaze - Business</title>
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="Commission and business infromation about Glaze's work."
					key="desc"
				/>
			</Head>

			<div className="bg-blackSecondary h-full md:h-full lg:h-screen">
				<div className="p-4">
					<Image
						src="/Logo/LONG RECT LOGO_svg.svg"
						width={512}
						height={200}
						alt="logo"
					/>
					<div>
						<Button.Link label="Main page" url="/" sameTab />
					</div>
				</div>
				<div className="w-full h-auto sm-phone:h-full">
					<div className="w-full md:w-3/4 m-auto h-auto flex flex-col justify-center md:flex-col lg:flex-row">
						<div className="w-auto lg:w-1/3 md:w-auto h-full p-2">
							<h1 className="text-lg">Me</h1>
							<div className="bg-black flex flex-col p-4 h-full w-auto">
								<div className="flex flex-col p-2 md:flex-col lg:flex-col">
									<Image
										src="/Resources/commission pfp.jpg"
										width={256}
										height={256}
										className="w-1/3 h-1/3 my-auto mx-auto md:m-auto"
										alt="glaze profile picture"
									/>
									<div className="sm-phone:px-0 md:px-4 py-4 text-lg text-center">
										<h2>Hey! Are you looking for a creative 3D artist?</h2>
									</div>
								</div>
								<div className="p-2">
									<p>
										I have years of experience and official education in 3D
										Modelling software and techniques. I am versatile in
										multiple areas of 3D Modelling. <br /> <br /> My strong
										suits are hard surface, lighting and rendering. <br />{" "}
										<br /> Need your product visualized? Don’t hesitate to
										contact me!
									</p>
								</div>
							</div>
						</div>
						<div className="w-auto h-full m-2">
							<h1 className="text-lg">Portfolio</h1>
							<div className="bg-black w-full h-full">
								<div className="md:p-4 flex flex-col md:flex-row justify-center">
									<div className="mx-auto p-2">
										<Button.Link
											label="Artstation"
											url="https://www.artstation.com/glaze"
											icon={<HiOutlineExternalLink />}
										/>
										<SimpleImageButton
											alt="artstation portfolio"
											linkUrl="https://www.artstation.com/glaze"
											imageUrl="/Resources/Portfolio_AS.jpg"
											width={256}
											height={256}
										/>
									</div>
									<div className="mx-auto p-2">
										<Button.Link
											label="Instagram"
											url="https://www.instagram.com/i_am_the_real_glaze/"
											icon={<HiOutlineExternalLink />}
										/>
										<SimpleImageButton
											alt="instagram portfolio"
											linkUrl="https://www.instagram.com/i_am_the_real_glaze/"
											imageUrl="/Resources/Portfolio_IG.jpg"
											width={256}
											height={256}
										/>
									</div>
								</div>
							</div>
							<div className="bg-black w-full h-full text-center p-4 my-4">
								<h1 className="text-lg mx-auto text-center">Contact Me!</h1>
								<p>Name: Rasmus R.</p>
								<p>Email: itmeglaze@gmail.com</p>
								<p>Discord: Glaze#7394</p>
								<p>(let me know you came from this site)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommissionPage;
