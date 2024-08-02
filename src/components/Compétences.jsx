import skillsData from "../skills.json";

function Compétences() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2>Pro Skillset</h2>
      </div>
      <div className="compétence-section">
        {skillsData.proSkills.map((skill, index) => (
          <div className="div-skill" key={index}>
            <img src={skill.logo} alt={skill.name} />
          </div>
        ))}
      </div>
      <div className="skills-section">
        <h2>Outils Utilisés</h2>
      </div>
      <div className="compétence-section">
        {skillsData.tools.map((tool, index) => (
          <div className="div-skill" key={index}>
            <img src={tool.logo} alt={tool.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Compétences;
