import type { NextPage } from "next";
import Button from "../components/Misc/button";

const Home: NextPage = () => {
  const clickedButton = () => {
    console.log("clicked");
  };

  return (
    <div>
      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
