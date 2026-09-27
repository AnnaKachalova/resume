import "../education-item/education-item.css";

export default function EducationItem({ name, faculty, speciality, qualification, date }) {
  return (
    <div className="education-container">
      <h3 className="education-name">{name}</h3>
      <div className="education-row">
        <div>Факультет:</div>
        <div>{faculty}</div>
      </div>
      <div className="education-row">
        <div>Специальность:</div>
        <div>{speciality}</div>
      </div>
      <div className="education-row">
        <div>Квалификация:</div>
        <div className="mark">{qualification}</div>
      </div>
      <p className="education-date">{date}</p>
    </div>
  );
}
