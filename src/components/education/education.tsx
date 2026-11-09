import EducationItem from "../education-item/education-item";
import educationData from "./data-education.json";
import "../education/education.css";
import type { JSX } from "react";

export default function Education(): JSX.Element {
  return (
    <section className="education">
      <h2 className="education-header">Образование</h2>
      {educationData.map((cer) => {
        return (
          <EducationItem
            key={cer.id}
            name={cer.name}
            faculty={cer.faculty}
            speciality={cer.speciality}
            qualification={cer.qualification}
            date={cer.date}
          />
        );
      })}
    </section>
  );
}
