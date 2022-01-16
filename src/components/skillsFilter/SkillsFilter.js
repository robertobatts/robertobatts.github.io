import React, { useState } from "react";
import "./SkillsFilter.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill({ property, setProperty, options, name }) {
  return (
    <div className="skills-filter-wrapper skills-filter">
      <div>
        {name}:
      </div>
      <select
        className="skills-filter-select skills-filter"
        name={name}
        value={property}
        onChange={e => setProperty(e.target.value)}
        id={name}
      >
        {options.map(option => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}