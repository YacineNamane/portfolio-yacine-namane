import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../projects.json";

function ProjectsSet() {
  return (
    <Container fluid className="projects-container" id="projects">
      <h2>Projets Réalisés ..</h2>
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
            <div className="project-tags">
              {project.tags?.slice(0, 4).map((tag, index) => (
                <span key={index} className="tag">
                  <span
                    className="tag-dot"
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: tag.color,
                      marginRight: "6px",
                    }}
                  ></span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectsSet;
