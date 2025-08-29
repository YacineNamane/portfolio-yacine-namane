import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../projects.json";

function ProjectsSet() {
  return (
    <Container fluid className="projects-container" id="projects">
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageSrc}
              alt={`Website ${project.title}`}
              className="project-img"
            />
            <div className="project-overlay">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectsSet;
