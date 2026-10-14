import Certificate from "../certificate/certificate";
import AboutMe from "../about-me/about-me";
import Education from "../education/education";
import Portfolio from "../portfolio/portfolio";
import Experience from "../experience/experience";

import "../../styles/global.css";
import "../../styles/variables.css";
import "../main/main.css";

export default function Main() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Portfolio />
      <Experience />
      <Certificate />
    </main>
  );
}
