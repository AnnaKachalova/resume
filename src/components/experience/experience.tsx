import ExperienceItem from "../experience-item/experience-item";
import dataExperience from "./data-experience.json";
import type { JSX } from "react";

export default function Experience(): JSX.Element {
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
