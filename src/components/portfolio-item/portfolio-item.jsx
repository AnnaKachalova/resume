import "../portfolio-item/portfolio-item.css";
import a from "../../assets/gif/1.gif";

export default function PortfolioItem({ img, description, date, technologies }) {
  return (
    <div className="portfolio-item">
      <img className="portfolio-img" src={img} alt="" />
      <div className="part2">
        <div className="portfolio-description">{description}</div>
        <div className="portfolio-technologies">{technologies}</div>
        <div className="portfolio-date green">{date}</div>
      </div>
    </div>
  );
}
