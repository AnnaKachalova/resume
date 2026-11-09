import "./certificate-item.css";
import type { JSX } from "react";

interface CertificateItemProps {
  description: string;
  img: string;
  date: string;
  pdf: string;
}

export default function CertificateItem(props: CertificateItemProps): JSX.Element {
  const { description, img, date, pdf } = props;
  return (
    <article className="certificate-item">
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={description} />
        <p className="certificate-description">{description}</p>
        <p className="certificate-date">{date}</p>
      </a>
    </article>
  );
}
