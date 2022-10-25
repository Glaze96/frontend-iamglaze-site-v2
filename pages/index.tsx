import type { NextPage } from "next";
import Button from "../components/Misc/button";

const Home: NextPage = () => {
  const clickedButton = () => {
    console.log("clicked");
  };

  return (
    <div>
      <main>
        <h1>test</h1>
        <Button label="OUTBOUND" url="https://iamglaze.me" newtab/>
        <Button label="BUTTON" callback={clickedButton}/>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
