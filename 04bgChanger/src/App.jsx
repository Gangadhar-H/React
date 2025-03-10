import { useState } from "react"
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(colorName) {
    setColor(colorName);
  }
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-5">

          {/* <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }} onClick={() => setColor('red')}>Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }} onClick={() => setColor('Green')}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }} onClick={() => setColor('Blue')}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }} onClick={() => setColor('violet')}>Violet</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }} onClick={() => setColor('yellow')}>Yellow</button> */}

          <Button color='Red' click={changeColor} />
          <Button color='Green' click={changeColor} />
          <Button color='Blue' click={changeColor} />
          <Button color='Violet' click={changeColor} />
          <Button color='Yellow' click={changeColor} />

        </div>
      </div>
    </div>
  )
}

export default App
