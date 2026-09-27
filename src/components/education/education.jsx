import EducationItem from "../education-item/education-item";
import "../education/education.css";

const educationData = [
  {
    name: "Ульяновский Государственный Технический Университет",
    faculty: "Информационных систем и технологий",
    speciality: "Информатика и вычислительная техника",
    qualification: "Магистр 🧙‍♀️",
    date: "2015 - 2017",
  },
  {
    name: "Уфимский Государственный Авиационный Технический Университет",
    faculty: "Информатики и робототехники",
    speciality: "Информационные системы и технологии",
    qualification: "Бакалавр",
    date: "2011 - 2015",
  },
];

export default function Education() {
  return (
    <section className="education">
      <h2 className="education-header">Образование</h2>
      {educationData.map((cer) => {
        return (
          <EducationItem
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
