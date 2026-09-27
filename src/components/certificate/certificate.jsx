import "./certificate.css";
import CertificateItem from "../certificate-item/certificate-item";

import react from "../../assets/images/react.jpg";
import jsar from "../../assets/images/jsar.jpg";
import js1 from "../../assets/images/js1.jpg";
import js2 from "../../assets/images/js2.jpg";
import html from "../../assets/images/html1.jpg";

import reactPdf from "../../assets/pdf/doc_react.pdf";
import jsarPdf from "../../assets/pdf/doc_jsar.pdf";
import js1Pdf from "../../assets/pdf/doc_js1.pdf";
import js2Pdf from "../../assets/pdf/doc_js2.pdf";
import htmlPdf from "../../assets/pdf/doc_html1.pdf";

const certificatesData = [
  {
    description: "React. Разработка сложных клиентских приложений.",
    img: react,
    date: "27 сентября — 28 ноября 2021",
    pdf: reactPdf,
  },
  {
    description: "JavaScript. Архитектура клиентских приложений",
    img: jsar,
    date: "29 марта — 30 мая 2021",
    pdf: jsarPdf,
  },
  {
    description: "Профессиональный JavaScript, уровень 1.",
    img: js1,
    date: "31 мая — 5 августа 2019",
    pdf: js1Pdf,
  },
  {
    description: "Профессиональный HTML и CSS, уровень 1.",
    img: html,
    date: "2 сентября — 3 ноября 2019",
    pdf: htmlPdf,
  },
  {
    description: "Профессиональный JavaScript, уровень 2.",
    img: js2,
    date: "18 ноября 2019 — 29 января 2020",
    pdf: js2Pdf,
  },
];

export default function Certificate() {
  return (
    <section className="certificates">
      <h2 className="certificate-header">Сертификаты</h2>
      <div className="certificate-container">
        {certificatesData.map((cer) => {
          return <CertificateItem description={cer.description} img={cer.img} date={cer.date} pdf={cer.pdf} />;
        })}
      </div>
    </section>
  );
}
