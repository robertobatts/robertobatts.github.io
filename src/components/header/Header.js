import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo" onClick={closeMenu}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <div
          className="menu-icon"
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </div>
        <ul className={`menu${isMenuOpen ? " menu-open" : ""}${isDark ? " dark-menu" : ""}`}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMenu}>Work Experiences</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={closeMenu}>Certifications</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={closeMenu}>Open Source</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={closeMenu}>Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={closeMenu}>Talks</a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={closeMenu}>Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
