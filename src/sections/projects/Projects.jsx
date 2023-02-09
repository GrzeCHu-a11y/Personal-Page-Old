import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import SectionHeader from "../../components/SectionHeader";
import data from "../../Data";

const Projects = () => {
  const [tag, setTag] = useState("all");

  function handleSetTag(e) {
    setTag(e.target.name);
    console.log(e.target.name);
  }

  return (
    <section id="projects" className={styles.projects}>
      <SectionHeader title="Projects" />
      <div className={styles.buttonsContainer}>
        <button name="all" className={styles.button} onClick={handleSetTag}>
          ALL
        </button>
        <button name="pages" className={styles.button} onClick={handleSetTag}>
          WEB PAGES
        </button>
        <button name="design" className={styles.button} onClick={handleSetTag}>
          UI/UX DESGIN
        </button>
        <button name="games" className={styles.button} onClick={handleSetTag}>
          GAMES
        </button>
      </div>
      <div className={styles.projectsContainer}>
        <h4>{tag}</h4>
        {data.map((project) => (
          <div key={project.id}>
            <img src={project.projectImage} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
