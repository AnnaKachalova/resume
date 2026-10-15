import EducationItem from "../education-item/education-item";
import educationData from "./data-education.json";

import "../../styles/global.css";
import "../../styles/variables.css";
import "../education/education.css";

export default function Education() {
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
