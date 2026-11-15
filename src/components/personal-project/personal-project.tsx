import type { JSX } from "react";
import promptGeneratorImage from "../../assets/projects/haven-corner-prompt-generator.png";
import vkCommunityImage from "../../assets/projects/haven-corner-vk.png";
import catsPromptGeneratorImage from "../../assets/projects/qutecats-prompt-generator.png";
import catsVkCommunityImage from "../../assets/projects/qutecats-vk.png";
import fairyCommunityImage from "../../assets/projects/fairy-fluffy-tail-vk.png";
import fairyFigmaImage from "../../assets/projects/fairy-fluffy-tail-figma.png";
import fairyVideosImage from "../../assets/projects/fairy-fluffy-tail-videos.png";
import fluffyTailDesktopImage from "../../assets/projects/fluffy-tail-desktop.png";
import fluffyTailMobileImage from "../../assets/projects/fluffy-tail-mobile.jpeg";
import "./personal-project.css";

interface ProjectStep {
  number: string;
  title: string;
  description: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  compact?: boolean;
}

interface PersonalProjectData {
  name: string;
  description: string;
  url: string;
  linkText: string;
  technologies: string[];
  steps: ProjectStep[];
  gallery: ProjectImage[];
  featuredGallery?: boolean;
}

const promptWorkflowSteps: ProjectStep[] = [
  {
    number: "01",
    title: "Разработала генератор промптов",
    description:
      "Самостоятельно написала интерфейс на React, который собирает промпт из выбранных параметров.",
  },
  {
    number: "02",
    title: "Сгенерировала изображение",
    description:
      "Использую подготовленный промпт в GigaChat для генерации изображений.",
  },
  {
    number: "03",
    title: "Опубликовала в сообществе",
    description: "Размещаю готовые изображения в сообществе ВКонтакте.",
  },
];

const projects: PersonalProjectData[] = [
  {
    name: "Раскраски пушистого хвостика",
    description:
      "Сайт с раскрасками. Раскраски можно выбирать по темам, скачивать и распечатывать.",
    url: "https://fluffy-tail.art/",
    linkText: "Открыть сайт",
    technologies: ["React", "TypeScript", "Vite", "GitHub Copilot", "Промпт-инжиниринг", "Генерация изображений"],
    featuredGallery: true,
    steps: [
      {
        number: "01",
        title: "Создала сайт",
        description:
          "Разработала адаптивный сайт на React и TypeScript с каталогом разделов и поиском, используя GitHub Copilot для помощи в написании кода.",
      },
      {
        number: "02",
        title: "Подготовила раскраски",
        description:
          "Составляла и уточняла промпты для генерации изображений, отбирала результаты и подготавливала превью разделов.",
      },
      {
        number: "03",
        title: "Опубликовала проект",
        description:
          "Разместила сайт на собственном домене, настроила автоматическую публикацию, SEO и Яндекс Метрику.",
      },
    ],
    gallery: [
      {
        src: fluffyTailDesktopImage,
        alt: "Главная страница сайта «Раскраски пушистого хвостика» с каталогом тем",
        caption: "Сайт с каталогом раскрасок",
      },
      {
        src: fluffyTailMobileImage,
        alt: "Мобильная версия сайта «Раскраски пушистого хвостика»",
        caption: "Мобильная версия сайта",
        compact: true,
      },
    ],
  },
  {
    name: "Сказки от пушистого хвостика",
    description:
      "Детский проект с раскрасками, вырезалками и обучающими видео для сообщества и видеоканала.",
    url: "https://vk.ru/fairy_fluffy_tail",
    linkText: "Открыть сообщество ВК",
    technologies: ["Figma", "Промпты", "Генерация изображений", "Генерация видео", "ВКонтакте"],
    steps: [
      {
        number: "01",
        title: "Создала раскраски и вырезалки",
        description:
          "Генерировала изображения для детских раскрасок и материалов для вырезания.",
      },
      {
        number: "02",
        title: "Подготовила кадры в Figma",
        description:
          "Собирала и подготавливала кадры для обучающих видео.",
      },
      {
        number: "03",
        title: "Сгенерировала видео",
        description:
          "Составляла промпты и генерировала обучающие видео для детского канала.",
      },
    ],
    gallery: [
      {
        src: fairyCommunityImage,
        alt: "Сообщество «Сказки от пушистого хвостика» с публикациями раскрасок и вырезалок",
        caption: "Раскраски и вырезалки в сообществе",
      },
      {
        src: fairyFigmaImage,
        alt: "Подготовленные в Figma кадры и промпты для детских видео",
        caption: "Кадры и промпты в Figma",
      },
      {
        src: fairyVideosImage,
        alt: "VK Видео канал «Сказки от пушистого хвостика» с обучающими роликами",
        caption: "Обучающие видео в VK Видео",
      },
    ],
  },
  {
    name: "Уголок спокойствия",
    description:
      "Сообщество с изображениями природы и интерфейс на React для составления промптов.",
    url: "https://vk.ru/haven_corner",
    linkText: "Открыть сообщество ВК",
    technologies: ["React", "GigaChat", "ВКонтакте"],
    steps: promptWorkflowSteps,
    gallery: [
      {
        src: promptGeneratorImage,
        alt: "Интерфейс на React для составления промптов",
        caption: "Интерфейс генератора промптов",
      },
      {
        src: vkCommunityImage,
        alt: "Сообщество «Уголок спокойствия» во ВКонтакте с примерами публикаций",
        caption: "Сообщество и публикации во ВКонтакте",
      },
    ],
  },
  {
    name: "Милые кошки",
    description:
      "Сообщество с изображениями кошек и тот же процесс создания публикаций с помощью React-интерфейса и GigaChat.",
    url: "https://vk.ru/qutecats",
    linkText: "Открыть сообщество ВК",
    technologies: ["React", "GigaChat", "ВКонтакте"],
    steps: promptWorkflowSteps,
    gallery: [
      {
        src: catsPromptGeneratorImage,
        alt: "React-интерфейс генератора промптов с параметрами для изображений кошек",
        caption: "Генератор промптов для изображений кошек",
      },
      {
        src: catsVkCommunityImage,
        alt: "Сообщество «Милые кошки» во ВКонтакте с примерами публикаций",
        caption: "Сообщество и публикации во ВКонтакте",
      },
    ],
  },
];

export default function PersonalProject(): JSX.Element {
  return (
    <section className="personal-project">
      <h2>Личные проекты</h2>
      <div className="personal-project-list">
        {projects.map((project) => (
          <article className="personal-project-card" key={project.name}>
            <div className="personal-project-heading">
              <div>
                <h3 className="personal-project-title">{project.name}</h3>
                <p className="personal-project-summary">
                  {project.description}
                </p>
              </div>
              <a
                className="personal-project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkText}
              </a>
            </div>

            <div
              className="personal-project-technologies"
              aria-label="Инструменты и площадки"
            >
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <ol className="personal-project-steps">
              {project.steps.map((step) => (
                <li className="personal-project-step" key={step.number}>
                  <span className="personal-project-step-number">
                    {step.number}
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>

            <div
              className={`personal-project-gallery${project.gallery.length === 3 ? " personal-project-gallery--three" : ""}${project.featuredGallery ? " personal-project-gallery--featured" : ""}`}
            >
              {project.gallery.map((image) => (
                <figure key={image.src}>
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Открыть крупное изображение: ${image.caption}`}
                  >
                    <img
                      className={image.compact ? "personal-project-image--compact" : undefined}
                      src={image.src}
                      alt={image.alt}
                    />
                  </a>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
