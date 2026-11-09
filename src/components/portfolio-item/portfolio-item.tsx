import type { JSX } from "react";
import "../portfolio-item/portfolio-item.css";

interface PortfolioItemProps {
  img: string;
  description: string;
  comment?: string;
  date: number;
  technologies: string[];
}

export default function PortfolioItem(props: PortfolioItemProps): JSX.Element {
  const { img, description, comment, date, technologies } = props;

  return (
    <div className="portfolio-item">
      <img className="portfolio-img" src={img} alt="" />
      <div className="portfolio-content">
        <div className="portfolio-description">{description}</div>
        {comment ? <div className="portfolio-comment">{comment}</div> : ""}
      </div>

      <div className="portfolio-footer">
        <div className="portfolio-technologies">
          {technologies.map((technology, index) => {
            return (
              <div key={index} className={`badge ${technology.toLowerCase()}`}>
                {technology}
              </div>
            );
          })}
        </div>
        <div className="portfolio-date">{date}</div>
      </div>
    </div>
  );
}
