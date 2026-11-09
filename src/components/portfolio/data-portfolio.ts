import image14 from "../../assets/portfolio/14.png";
import image13 from "../../assets/portfolio/13.png";
import image12 from "../../assets/portfolio/12.png";
import image11 from "../../assets/portfolio/11.png";
import image2 from "../../assets/portfolio/2.png";
import image1 from "../../assets/portfolio/1.png";
import image9 from "../../assets/portfolio/9.png";
import image10 from "../../assets/portfolio/10.png";
import image8 from "../../assets/portfolio/8.png";
import image6 from "../../assets/portfolio/6.png";
import image7 from "../../assets/portfolio/7.png";
import image3 from "../../assets/portfolio/3.png";
import image4 from "../../assets/portfolio/4.png";
import image5 from "../../assets/portfolio/5.png";

interface PortfolioEntry {
  id: string;
  img: string;
  description: string;
  comment?: string;
  date: number;
  technologies: string[];
}

export const portfolioData: PortfolioEntry[] = [
  {
    id: "portfolio-14",
    img: image14,
    description: "Игровая карта на тему: Two dimensional shapes",
    comment: "WCAG - контент для людей с инвалидностью",
    date: 2026,
    technologies: ["TypeScript", "CSS", "SVG", "WCAG"],
  },
  {
    id: "portfolio-13",
    img: image13,
    description: "Игровая карта на тему: Two dimensional shapes",
    comment: "WCAG - контент для людей с инвалидностью",
    date: 2026,
    technologies: ["TypeScript", "CSS", "SVG", "WCAG"],
  },
  {
    id: "portfolio-12",
    img: image12,
    description: "Игровая карта на тему: Explore cubic centimeters as a standard unit of volume",
    comment: "Lottie-анимация - векторная анимация на основе JSON-файлов",
    date: 2025,
    technologies: ["TypeScript", "CSS", "SVG", "Lottie"],
  },
  {
    id: "portfolio-11",
    img: image11,
    description: "Игровая карта на тему: Solve more addition equations that cross a ten, where one addend is 7",
    comment: "Lottie-анимация - векторная анимация на основе JSON-файлов",
    date: 2023,
    technologies: ["TypeScript", "HTML", "CSS", "SVG", "Lottie"],
  },
  {
    id: "portfolio-2",
    img: image2,
    description: "Игровая карта на тему: Given the number name, identify the numeric form of multiple of 10",
    comment: "Lottie-анимация - векторная анимация на основе JSON-файлов",
    date: 2023,
    technologies: ["JavaScript", "HTML", "CSS", "SVG", "Lottie"],
  },
  {
    id: "portfolio-1",
    img: image1,
    description: "Игровая карта на тему: Add groups of ten to a two-digit number",
    comment: "Lottie-анимация - векторная анимация на основе JSON-файлов",
    date: 2022,
    technologies: ["JavaScript", "HTML", "CSS", "SVG", "Lottie"],
  },
  {
    id: "portfolio-9",
    img: image9,
    description: "Игровая карта на тему: Match a given label to the corresponding shape",
    date: 2022,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-10",
    img: image10,
    description: "Игровая карта на тему: Match a given label to the corresponding shape",
    date: 2022,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-8",
    img: image8,
    description: "Игровая карта на тему: Determine if a given shape is or is not a quadrilateral",
    date: 2022,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-6",
    img: image6,
    description: "Игровая карта на тему: Multiply two 3-digit numbers using the concept of partial products.",
    date: 2022,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-7",
    img: image7,
    description: "Игровая карта на тему: Use a number line and practice the numbers 11 and 12",
    date: 2021,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-3",
    img: image3,
    description: "Игровая карта на тему: Compare unit fractions based on a model",
    date: 2018,
    technologies: ["JavaScript", "HTML", "CSS"],
  },

  {
    id: "portfolio-4",
    img: image4,
    description: "Карточка для закрепления навыков: Label shaded and unshaded parts of a figure  ",
    date: 2018,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "portfolio-5",
    img: image5,
    description: "Карточка для закрепления навыков: Label shaded and unshaded parts of a figure  ",
    date: 2018,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];
