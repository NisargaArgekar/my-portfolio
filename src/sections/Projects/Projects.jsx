import styles from './ProjectsStyles.module.css';
import foodwebsite from '../../assets/fresh-burger.png'
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foodwebsite}
          link="https://github.com/NisargaArgekar/BiteMeal"
          h3="Bite Meal"
          p="Food Delivery Website"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/NisargaArgekar/Diction-Snap"
          h3="AI-Generated Word Searcher"
          p="Diction-Snap"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/NisargaArgekar/Burger-hut-website"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
