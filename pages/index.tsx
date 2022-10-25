import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div className="grid grid-cols-2">
          <h1 className="text-2xl">HELLO THERE</h1>
          <div className="place-content-center h-screen">
            <img src="/Logo/RECT LOGO_svg.svg" alt="logo" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
