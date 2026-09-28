import PortfolioItem from "../portfolio-item/portfolio-item";

import p1 from "../../assets/portfolio/1.png";
import p2 from "../../assets/portfolio/2.png";
import p3 from "../../assets/portfolio/3.png";
import p4 from "../../assets/portfolio/4.png";
import p5 from "../../assets/portfolio/5.png";
import p6 from "../../assets/portfolio/6.png";
import p7 from "../../assets/portfolio/7.png";
import p8 from "../../assets/portfolio/8.png";
import p9 from "../../assets/portfolio/9.png";
import p10 from "../../assets/portfolio/10.png";
import p11 from "../../assets/portfolio/11.png";
import p12 from "../../assets/portfolio/12.png";
import p13 from "../../assets/portfolio/13.png";
import p14 from "../../assets/portfolio/14.png";

import "../portfolio/portfolio.css";

const portfolioData = [
  {
    img: p14,
    description: "Игровая карта на тему: ",
    date: 2026,
    technologies: "TypeScript, CSS, работа с SVG, WCAG(контент для людей с инвалидностью)",
  },
  {
    img: p13,
    description: "Игровая карта на тему: ",
    date: 2026,
    technologies: "TypeScript, CSS, работа с SVG, WCAG(контент для людей с инвалидностью)",
  },
  {
    img: p12,
    description: "Игровая карта на тему: Explore cubic centimeters as a standard unit of volume",
    date: 2025,
    technologies: "TypeScript, CSS, работа с SVG",
  },
  {
    img: p11,
    description: "Игровая карта на тему: Solve more addition equations that cross a ten, where one addend is 7",
    date: 2023,
    technologies: "JavaScript, CSS, HTML, lottie анимации",
  },
  {
    img: p2,
    description: "Игровая карта на тему: Given the number name, identify the numeric form of multiple of 10",
    date: 2023,
    technologies: "JavaScript, CSS, HTML, lottie анимации",
  },
  {
    img: p1,
    description: "Игровая карта на тему: Add groups of ten to a two-digit number",
    date: 2022,
    technologies: "JavaScript, CSS, HTML, lottie анимации",
  },
  {
    img: p9,
    description: "Игровая карта на тему: Match a given label to the corresponding shape",
    date: 2022,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p10,
    description: "Игровая карта на тему: Match a given label to the corresponding shape",
    date: 2022,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p8,
    description: "Игровая карта на тему: Determine if a given shape is or is not a quadrilateral",
    date: 2022,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p6,
    description: "Игровая карта на тему: Multiply two 3-digit numbers using the concept of partial products",
    date: 2022,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p7,
    description: "Игровая карта на тему: Use a number line and practice the numbers 11 and 12",
    date: 2021,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p3,
    description: "Игровая карта на тему: Compare unit fractions based on a model",
    date: 2018,
    technologies: "JavaScript, CSS, HTML",
  },
  ,
  {
    img: p4,
    description: "Карточка для закрепления навыков: Label shaded and unshaded parts of a figure  ",
    date: 2018,
    technologies: "JavaScript, CSS, HTML",
  },
  {
    img: p5,
    description: "Карточка для закрепления навыков: Label shaded and unshaded parts of a figure  ",
    date: 2018,
    technologies: "JavaScript, CSS, HTML",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-header">Портфолио</h2>
      <p className="portfolio-subHeader"> более {">"} 400 игровых карт</p>
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
