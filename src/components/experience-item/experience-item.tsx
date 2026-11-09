import type { JSX } from "react";
import "../experience-item/experience-item.css";

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  stack: string[];
}

export default function ExperienceItem(props: ExperienceItemProps): JSX.Element {
  const { position, company, period, responsibilities, stack } = props;

  return (
    <div className="experience-item">
      <h3 className="experience-position">{position}</h3>
      <div className="experience-company mark">{company}</div>
      {stack.length > 0 && (
        <div className="experience-stack">
          <span className="experience-stack-label">Стек:</span>
          <div className="experience-stack-badges">
            {stack.map((technology) => (
              <span
                key={technology}
                className={`experience-stack-badge ${technology.toLowerCase()}`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="experience-period">{period}</div>
      <ul className="experience-responsibilities">
        {responsibilities.map((responsibility, index) => {
          return (
            <li key={index} className="experience-responsibility">
              {responsibility}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
