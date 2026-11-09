import Certificate from "../certificate/certificate";
import AboutMe from "../about-me/about-me";
import Education from "../education/education";
import Portfolio from "../portfolio/portfolio";
import Experience from "../experience/experience";
import Technology from "../technology/technology";
import type { JSX } from "react";

import "../main/main.css";

export default function Main(): JSX.Element {
  return (
    <main>
      <AboutMe />
      <Technology />
      <Education />
      <Portfolio />
      <Experience />
      <Certificate />
    </main>
  );
}
