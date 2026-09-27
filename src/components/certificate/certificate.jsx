import React from "react";
import "../certificate/certificate.css";

export default function Certificate({ description, img, date }) {
  return (
    <article className="certificate-item">
      <a href="assets/doc_react.pdf" target="_blank">
        <img src={img} alt={description} />
        <p className="certificate-desc">{description}</p>
        <p className="certificate-date">{date}</p>
      </a>
    </article>
  );
}
