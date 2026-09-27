import Certificate from "../certificate/certificate";
import AboutMe from "../about-me/about-me";
import Education from "../education/education";

import "../main/main.css";

export default function Main() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Certificate />
    </main>
  );
}
