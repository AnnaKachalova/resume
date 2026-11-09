import "../education-item/education-item.css";
import type { JSX } from "react";

interface EducationItemProps {
  name: string;
  faculty: string;
  speciality: string;
  qualification: string;
  date: string;
}

export default function EducationItem(prosp: EducationItemProps): JSX.Element {
  const { name, faculty, speciality, qualification, date } = prosp;

  return (
    <article className="education-container">
      <h3 className="education-university">{name}</h3>

      <dl className="education-details">
        <div className="education-row">
          <dt>Факультет:</dt>
          <dd>{faculty}</dd>
        </div>

        <div className="education-row">
          <dt>Специальность:</dt>
          <dd>{speciality}</dd>
        </div>

        <div className="education-row">
          <dt>Квалификация:</dt>
          <dd className="education-qualification">{qualification}</dd>
        </div>
      </dl>

      <p className="education-date">{date}</p>
    </article>
  );
}
