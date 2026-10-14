import "../../styles/global.css";
import "../../styles/variables.css";
import "../education-item/education-item.css";

export default function EducationItem({ name, faculty, speciality, qualification, date }) {
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
