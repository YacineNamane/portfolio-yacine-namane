import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../projects.json";
import BackgroundVod from "../images/backgroundprojects.mp4";

function Projects() {
  return (
    <Container fluid className="projects-container" id="projects">
      <video autoPlay muted loop id="background-video">
        <source src={BackgroundVod} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div>
        {" "}
        <h2> Projets réalisés</h2>{" "}
      </div>
      <div className="projects">
        {projectsData.map((project) => (
          <Col key={project.id} className="project-section hover">
            <div className="project-p1">
              <div>
                <img src={project.imageSrc} alt={`Website ${project.title}`} />
              </div>
              <div className="button-project-section">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#fafafa", fontSize: "1.9em" }}
                  />
                  Github
                </a>
              </div>
            </div>
            <div className="project-p2">
              <p>{project.description}</p>
            </div>
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
