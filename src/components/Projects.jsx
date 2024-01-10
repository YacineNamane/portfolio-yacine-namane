import React from "react";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../projects.json";

function Projects() {
  return (
    <Container fluid className="projects-container" id="projects">
      <div>
        {" "}
        <h2>
          {" "}
          Projets | <span>réaliser</span>{" "}
        </h2>{" "}
      </div>
      <div className="projects">
        {projectsData.map((project) => (
          <Col key={project.id} className="project-section hover">
            <div>
              <img src={project.imageSrc} alt={`Website ${project.title}`} />
            </div>
            <div>
              <p>{project.description}</p>
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
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
