import ExperienceItem from "../experience-item/experience-item";
import dataExperience from "./data-experience.json";

import "../../styles/global.css";
import "../../styles/variables.css";
import "../experience/experience.css";

export default function Experience() {
  return (
    <section className="experience">
      <h2 className="experience-header">Опыт работы</h2>
      <div className="experience-group">
        {dataExperience.map((port) => {
          return (
            <ExperienceItem
              key={port.id}
              position={port.position}
              company={port.company}
              period={port.period}
              responsibilities={port.responsibilities}
              stack={port.stack}
            />
          );
        })}
      </div>
    </section>
  );
}
