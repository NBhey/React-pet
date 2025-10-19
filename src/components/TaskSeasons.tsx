
import { useState } from "react";

const seasons = ["Зима", "Весна", "Лето", "Осень"];

export default function App() {
  const [index, setIndex] = useState(0);
  const [startCount, setStartCount] = useState(0);

  function changeSeason(number: number) {
    switch (number) {
      case 0:
        setIndex((prevState) => 0);
        break;
      case 25:
        setIndex((prevState) => 1);
        break;
      case 50:
        setIndex((prevState) => 2);
        break;
      case 75:
        setIndex((prevState) => 3);
        break;
      default:
        setIndex((prevState) => 0);
    }
    setStartCount((prevState) => number);
  }
  return (
    <div className="App">
      <h1>{seasons[index]}</h1>
      <input
        onChange={(e) => {
          changeSeason(Number(e.target.value));
        }}
        value={startCount}
        type="range"
        step="25"
        min="0"
        max="100"
      />
    </div>
  );
}