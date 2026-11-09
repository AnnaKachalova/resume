import "./certificate.css";
import type { JSX } from "react";

import CertificateItem from "../certificate-item/certificate-item";

import { certificatesData } from "./data-certificate";

export default function Certificate(): JSX.Element {
  return (
    <section className="certificates">
      <h2 className="certificate-header">Сертификаты</h2>
      <div className="certificate-container">
        {certificatesData.map((certificate) => {
          return (
            <CertificateItem
              key={certificate.id}
              description={certificate.description}
              img={certificate.img}
              date={certificate.date}
              pdf={certificate.pdf}
            />
          );
        })}
      </div>
    </section>
  );
}
