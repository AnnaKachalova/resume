import PortfolioItem from "../portfolio-item/portfolio-item";
import p1 from "../../assets/portfolio/1.png";
import p2 from "../../assets/portfolio/2.png";
import "../portfolio/portfolio.css";

const portfolioData = [
  {
    img: p1,
    description: "Add groups of ten to a two-digit number",
    date: 2022,
    technologies: "JavaScript CSS HTML, lottie анимации",
  },
  {
    img: p2,
    description: "Given the number name, identify the numeric form of multiple of 10",
    date: 2023,
    technologies: "JavaScript CSS HTML, lottie анимации",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-header">Портфолио</h2>
      <p className="portfolio-subHeader"> более {">"} 300 игровых карт</p>
      <div className="portfolio-group">
        {portfolioData.map((port) => {
          return (
            <PortfolioItem img={port.img} description={port.description} date={port.date} technologies={port.technologies} />
          );
        })}
      </div>
    </section>
  );
}
