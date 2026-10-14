import "../../styles/global.css";
import "../../styles/variables.css";
import "../about-me/about-me.css";

import github from "../../assets/images/github.png";
import htmlacademy from "../../assets/images/html.png";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/AnnaKachalova",
    icon: github,
  },
  {
    label: "HTML Academy",
    href: "https://htmlacademy.ru/profile/id206162",
    icon: htmlacademy,
  },
];

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
            <div className="about-me-socials">
              {contacts.map(({ label, href, icon }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
            <div className="about-me-contact-info">
              <a href="mailto:kachalova.anna.10@gmail.com">kachalova.anna.10@gmail.com</a>
              <a href="tel:+79270325442">8 (927) 032-54-42</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
