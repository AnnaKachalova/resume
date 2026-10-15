import "../../styles/global.css";
import "../../styles/variables.css";
import "../portfolio/portfolio.css";

import PortfolioItem from "../portfolio-item/portfolio-item";
import { portfolioData } from "./data-portfolio";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-header">Портфолио</h2>
      <p className="portfolio-subHeader"> более {">"} 400 игровых карт и компоненты к ним</p>
      <div className="portfolio-group">
        {portfolioData.map((port) => {
          return (
            <PortfolioItem
              key={port.id}
              img={port.img}
              title={port.title}
              description={port.description}
              comment={port.comment}
              date={port.date}
              technologies={port.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}
