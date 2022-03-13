import React, {useState} from "react";
import "./SkillsFilter.scss";

export default function SoftwareSkill({ property, setProperty, options, name }) {
  const [selected, setSelected] = useState(false);



  return (
    <div className="skills-filter-wrapper skills-filter">
      <select
        className="skills-filter-select skills-filter"
        name={name}
        value={property}
        onChange={e => setProperty(e.target.value)}
        id={name}
      >
        <option value={name} disabled selected hidden>{name}</option>
        {options.map(option => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}