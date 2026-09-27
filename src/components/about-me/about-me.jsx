import "../about-me/about-me.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h1>Качалова Анна | Frontend developer</h1>
      <div className="about-me-container">
        <div className="about-me-photo"></div>
        <div className="about-me-description">
          Опыт в коммерческой разработке - более 8 лет. Ключевые проекты последних лет реализованы в образовательных платформах
          Учи.ру и happyNumbers. В happyNumbers успешно совмещала техническую разработку игровых карт с управленческими функциями
          тимлида: координировала работу команды, распределяла задачи и отвечала за соблюдение сроков релизов.
        </div>
      </div>
    </section>
  );
}
