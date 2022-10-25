import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Button from "../components/Misc/button";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <main>
        <Layout>
          <div className="flex py-20">
            <img
              className="m-auto w-1/2"
              src="/Logo/RECT LOGO_svg.svg"
              alt="logo"
            />
          </div>
          <div className="flex m-auto">
            <div className="grid grid-rows-4 gap-4">
              <h2 className="text-xl">CHECK OUT MY...</h2>
              <Button label="MUSIC" />
              <Button label="ART" />
              <Button label="ME!" />
            </div>
          </div>
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
