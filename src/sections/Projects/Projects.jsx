import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-burger.png';
import dictionary from  '../../assets/dictionary.png';
import icon from '../../assets/icon.png';
import fooddelivery from '../../assets/fooddelivery.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={icon}
          link="https://hire-vista.vercel.app"
          h3="HireVista"
          p="AI-Enhanced Job Portal"
        />
        <ProjectCard
          src={fooddelivery}
          link="https://bite-meal.vercel.app"
          h3="Bite Meal"
          p="Food Delivery Website"
        />
        <ProjectCard
          src={dictionary}
          link="https://diction-snap.vercel.app"
          h3="Diction-Snap"
          p="AI-Generated Word Searcher"
        />
        <ProjectCard
          src={freshBurger}
          link="https://burger-hut-website-silk.vercel.app"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
