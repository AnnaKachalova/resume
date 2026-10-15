import "../../styles/global.css";
import "../../styles/variables.css";
import "./certificate.css";
import CertificateItem from "../certificate-item/certificate-item";
import { certificatesData } from "./data-certificate";

export default function Certificate() {
  return (
    <section className="certificates">
      <h2 className="certificate-header">Сертификаты</h2>
      <div className="certificate-container">
        {certificatesData.map((cer) => {
          return <CertificateItem key={cer.id} description={cer.description} img={cer.img} date={cer.date} pdf={cer.pdf} />;
        })}
      </div>
    </section>
  );
}
