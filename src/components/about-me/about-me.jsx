import "../../styles/global.css";
import "../../styles/variables.css";
import "../about-me/about-me.css";

import github from "../../assets/images/github.png";
import htmlacademy from "../../assets/images/html.png";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h1>Качалова Анна | Frontend developer</h1>
      <div className="about-me-container">
        <div className="about-me-photo"></div>
        <div className="about-me-description">
          <p>
            Опыт в коммерческой разработке - более 8 лет. Ключевые проекты последних лет реализованы в образовательных платформах
            Учи.ру и happyNumbers.
          </p>
          <p>
            В happyNumbers успешно совмещала техническую разработку игровых карт с управленческими функциями тимлида:
            координировала работу команды, распределяла задачи и отвечала за соблюдение сроков релизов.
          </p>
          <div className="about-me-contacts">
            <div className="left">
              <div className="html-academy">
                <a href="https://htmlacademy.ru/profile/id206162" target="_blank" rel="noopener noreferrer">
                  <img src={htmlacademy} />
                </a>
              </div>
              <div className="github">
                <a href="https://github.com/AnnaKachalova" target="_blank" rel="noopener noreferrer">
                  <img src={github} />
                </a>
              </div>
            </div>
            <div className="right">
              <div className="email">kachalova.anna.10@gmail.com</div>
              <div className="phone-number">89270325442</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
