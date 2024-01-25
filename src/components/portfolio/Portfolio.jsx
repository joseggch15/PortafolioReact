import "./portfolio.css";

import IMG1 from "../../assets/Flexcavo.png";
import IMG2 from "../../assets/Meetnative.png";
import IMG3 from "../../assets/Mobinspire.png";
import IMG4 from "../../assets/Raise.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import IMGN from "../../assets/IMG_3953.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "PropiedadesA1",
      img: IMGN,
      description:
        "It is the website for construction, generated and designed by Jose Gomez for the real estate sector and CoderHouse projects",
      technologies: "Java Script | SCSS | HTML",
      link: "https://taupe-douhua-51dc2f.netlify.app",
    }
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
