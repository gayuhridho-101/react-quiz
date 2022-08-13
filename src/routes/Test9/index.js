import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [totalPlanet, setTotalPlanet] = useState(1);

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="number" placeholder="number of planet" value={totalPlanet} onChange={(e) => setTotalPlanet(e.target.value)}/>
      <Solar totalPlanet={totalPlanet}/>
    </>
  )
}

export default Test9;