import "../portfolio-item/portfolio-item.css";

export default function PortfolioItem({ img, title, description, comment, date, technologies }) {
  return (
    <div className="portfolio-item">
      <img className="portfolio-img" src={img} alt="" />
      <div className="portfolio-content">
        <div className="portfolio-description">{description}</div>
        {comment ? <div className="portfolio-comment">{comment}</div> : ""}
      </div>

      <div className="portfolio-footer">
        <div className="portfolio-technologies">
          {technologies.map((technology) => {
            return <div className={`badge ${technology.toLowerCase()}`}>{technology}</div>;
          })}
        </div>
        <div className="portfolio-date">{date}</div>
      </div>
    </div>
  );
}
