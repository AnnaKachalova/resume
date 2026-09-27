import "../certificates/certificates.css";
import Certificate from "../certificate/certificate";

import react from "../../assets/images/react.jpg";
import jsar from "../../assets/images/jsar.jpg";
import js1 from "../../assets/images/js1.jpg";

const certificatesData = [
  {
    description: "React. Разработка сложных клиентских приложений.",
    img: react,
    date: "27 сентября — 28 ноября 2021",
  },
  {
    description: "JavaScript. Архитектура клиентских приложений",
    img: jsar,
    date: "29 марта — 30 мая 2021",
  },
  {
    description: "Профессиональный JavaScript, уровень 1.",
    img: js1,
    date: "31 мая — 5 августа 2019",
  },
];

export default function Certificates() {
  return (
    <section className="certificates">
      <h2>Сертификаты</h2>
      <div className="certificate-container">
        {certificatesData.map((cer) => {
          return <Certificate description={cer.description} img={cer.img} date={cer.date} />;
        })}
      </div>
    </section>
  );
}
