import styles from './ProjectsStyles.module.css';
import foodwebsite from '../../assets/fresh-burger.png'
import freshBurger from '../../assets/fresh-burger.png';
import dictionary from  '../../assets/dictionary.png'
import fooddelivery from '../../assets/fooddelivery.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fooddelivery}
          link="https://bite-meal.vercel.app"
          h3="Bite Meal"
          p="Food Delivery Website"
        />
        <ProjectCard
          src={dictionary}
          link="https://github.com/NisargaArgekar/Diction-Snap"
          h3="AI-Generated Word Searcher"
          p="Diction-Snap"
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
