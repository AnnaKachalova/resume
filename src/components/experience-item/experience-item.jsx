import "../experience-item/experience-item.css";

export default function ExperienceItem({ position, company, period, responsibilities, stack }) {
  return (
    <div className="experience-item">
      <h3 className="experience-position">{position}</h3>
      <div className="experience-company mark">{company}</div>
      {stack ? <div className="stack">{stack}</div> : ""}

      <div className="experience-period">{period}</div>
      <ul className="experience-responsibilities">
        {responsibilities.map((responsibility) => {
          return <li className="experience-responsibility">{responsibility}</li>;
        })}
      </ul>
    </div>
  );
}
