import React from "react";

function CardSkill(props) {
  // Divide the skills array into two separate arrays
  const halfIndex = Math.ceil(props.skills.length / 2);
  const firstHalfSkills = props.skills.slice(0, halfIndex);
  const secondHalfSkills = props.skills.slice(halfIndex);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{props.category}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {firstHalfSkills.map((skill) => (
            <div className="skills__data" key={skill.skill}>
              <i className="bx bx-badge-check"></i>
              <div className="skills__info">
                <h3 className="skills__name">{skill.skill}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {secondHalfSkills.map((skill) => (
            <div className="skills__data" key={skill.skill}>
              <i className="bx bx-badge-check"></i>
              <div className="skills__info">
                <h3 className="skills__name">{skill.skill}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSkill;
