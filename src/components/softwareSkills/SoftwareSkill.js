import React, { useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import SkillsFilter from "../../components/skillsFilter/SkillsFilter";

export default function SoftwareSkill() {
  const [selectedLevel, setSelectedLevel] = useState("Level");
  const [selectedWorkExperience, setSelectedWorkExperience] = useState("Work Experience");

  function getSkillsFilter() {
    return (
      <div className="skills-filter-container">
          Filter by
          <SkillsFilter
            property={selectedLevel}
            setProperty={setSelectedLevel}
            onClear={() => setSelectedLevel("Level")}
            name="Level"
            options={["Proficient", "Medium", "Beginner"]}
          />
          <SkillsFilter
            property={selectedWorkExperience}
            setProperty={setSelectedWorkExperience}
            onClear={() => setSelectedWorkExperience("Work Experience")}
            name="Work Experience"
            options={["Playtika", "Cogitare", "GFT", "Personal Projects"]}
          />
        </div>
    )
  }
  
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.filter(skill => {
            if (selectedLevel === "Level") {
              return true;
            }
            return skill.level === selectedLevel;
          }).filter(skill => {
            if (selectedWorkExperience === "Work Experience") {
              return true;
            }
            return skill.workExperiences.includes(selectedWorkExperience);
          }).map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <i className={skill.fontClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
