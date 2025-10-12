import { useEffect, useState } from "react";
import axios from "axios";
import Parent from "./components/Parent";
function App() {
  const [word, setWord] = useState<string>("World");
  const [data, setData] = useState<null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/NBhey/React-pet/refs/heads/master/products.json"
      );
      const newData = await response;
      console.log(newData.data);
    })();
  }, []);
  return (
    <>
      <h1>Hello {word}!</h1>
      <button
        onClick={() => {
          word === "World" ? setWord("Мир") : setWord("World");
        }}
      >
        Click!
      </button>

      <Parent num={15} string={word} />
      <br />
      <Gallery />
    </>
  );
}

export default App;

export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageId={"szV5sdG"}
        imageSize={70}
        profession={"physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered={"polonium (chemical element)"}
      />
       <Profile
        name={"Katsuko Saruhashi"}
        imageId={"YfeOqp2"}
        imageSize={70}
        profession={"geochemist"}
        awards={[
          "Miyake Prize for geochemistry",
          "Tanaka Prize"
        ]}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}

interface ProfileProp {
  name: string;
  imageId: string;
  imageSize: number;
  profession: string;
  awards: Array<String>;
  discovered: string;
}

function Profile({
  name,
  imageId,
  imageSize,
  profession,
  awards,
  discovered,
}: ProfileProp) {
  return (
    <section
      style={{
        border: "1px solid #aaa",
        borderRadius: "6px",
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
