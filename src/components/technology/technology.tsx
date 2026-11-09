import "./technology.css";
import type { JSX } from "react";

import { dataTechnology } from "./data-technology";

export default function Technology(): JSX.Element {
  return (
    <div className="technology-container">
      {dataTechnology.map((technology) => {
        return (
          <div key={technology.id} className="technology">
            <img className="technology-img" src={technology.img} alt="" />
            <div className="technology-name">{technology.name}</div>
          </div>
        );
      })}
    </div>
  );
}
