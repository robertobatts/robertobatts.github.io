import React, { useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import SkillsFilter from "../../components/skillsFilter/SkillsFilter";

export default function SoftwareSkill() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedWorkExperience, setSelectedWorkExperience] = useState("All");
  return (
    <div>
      <div className="software-skills-main-div">
        <div className="skills-filter-container">
          Filter by
          <SkillsFilter
            property={selectedLevel}
            setProperty={setSelectedLevel}
            name="Level"
            options={["All", "Proficient", "Medium", "Beginner"]}
          />
          <SkillsFilter
            property={selectedWorkExperience}
            setProperty={setSelectedWorkExperience}
            name="Work Experience"
            options={["All", "Playtika", "Cogitare", "GFT", "Personal Projects"]}
          />
        </div>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.filter(skill => {
            if (selectedLevel === "All") {
              return true;
            }
            return skill.level === selectedLevel;
          }).filter(skill => {
            if (selectedWorkExperience === "All") {
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
