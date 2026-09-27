import "./certificate-item.css";

export default function CertificateItem({ description, img, date, pdf }) {
  return (
    <article className="certificate-item">
      <a href={pdf} target="_blank">
        <img src={img} alt={description} />
        <p className="certificate-desc">{description}</p>
        <p className="certificate-date">{date}</p>
      </a>
    </article>
  );
}
