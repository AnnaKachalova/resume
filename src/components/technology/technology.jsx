import "../../styles/global.css";
import "../../styles/variables.css";
import "./technology.css";

import { dataTechnology } from "./data-technology";

export default function Technology() {
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
