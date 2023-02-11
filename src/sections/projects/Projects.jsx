import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import SectionHeader from "../../components/SectionHeader";
import data from "../../Data";

const Projects = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(data)
      : setFilteredImages(data.filter((project) => project.tag === tag));
  }, [tag]);

  function handleSetTag(e) {
    setTag(e.target.name);
    console.log(e.target.name);
  }

  return (
    <section id="projects" className={styles.projects}>
      <SectionHeader title="Things I've built" />
      <div className={styles.buttonsContainer}>
        <button
          name="all"
          className={`${tag == "all" ? styles.buttonActive : styles.button}`}
          onClick={handleSetTag}
        >
          ALL
        </button>
        <button
          name="pages"
          className={`${tag == "pages" ? styles.buttonActive : styles.button}`}
          onClick={handleSetTag}
        >
          WEB PAGES
        </button>
        <button
          name="design"
          className={`${tag == "design" ? styles.buttonActive : styles.button}`}
          onClick={handleSetTag}
        >
          UI/UX DESGIN
        </button>
        <button
          name="games"
          className={`${tag == "games" ? styles.buttonActive : styles.button}`}
          onClick={handleSetTag}
        >
          GAMES
        </button>
      </div>
      <div className={styles.projectsContainer}>
        {filteredImages.map((project) => (
          <div className={styles.card} key={project.id}>
            <div className={styles.imgContainer}>
              <img
                src={project.projectImage}
                alt={project.id}
                className={styles.img}
              />
            </div>
            <div className={styles.projectInfoContainer}>
              <h3 className={styles.h3}>{project.projectName}</h3>
              <p className={styles.projectInfoP}>{project.projectInfo}</p>
              <a className={styles.a} href={project.link}>
                open demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
