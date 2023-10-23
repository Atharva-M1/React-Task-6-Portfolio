import React from "react";
import "./App.css";
import {
  FaLinkedin,
  FaGithub,
  FaDumbbell,
  FaGamepad,
  FaMusic,
  FaUtensils,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCogs,
  FaCertificate,
  FaGlobe,
  FaLanguage,
  FaBuilding,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Atharva Mankame</h1>
        <p>atharvamankame30@gmail.com</p>
      </header>

      <section className="section">
        <h2>
          <FaGraduationCap /> EDUCATION
        </h2>
        <ul>
          <li>
            <strong>
              <FaBuilding /> VELLORE INSTITUTE OF TECHNOLOGY
            </strong>
            <ul>
              <li>B.Tech in Computer Science</li>
              <li>Chennai, Tamil Nadu</li>
              <li>College of Engineering</li>
            </ul>
          </li>
          <li>
            <strong>
              <FaBuilding /> Dnyanganga College (CLASS XII)
            </strong>
            <ul>
              <li>Mumbai, India</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaChalkboardTeacher /> COURSEWORK
        </h2>
        <ul>
          <li>
            <FaBook /> Data Structure and Algorithms
          </li>
          <li>
            <FaBook /> Design and Analysis of Algorithms
          </li>
          <li>
            <FaBook /> Software Engineering
          </li>
          <li>
            <FaBook /> Operating System
          </li>
          <li>
            <FaBook /> Database Management System
          </li>
          <li>
            <FaBook /> Compiler Design
          </li>
          <li>
            <FaBook /> Theory of Computation
          </li>
          <li>
            <FaBook /> Computer Architecture and Organization
          </li>
          <li>
            <FaBook /> Computer Networks
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaCogs /> Area of Interest
        </h2>
        <ul>
          <li>
            <FaCode /> Data Science
          </li>
          <li>
            <FaCode /> Networking/Cyber-Sec.
          </li>
          <li>
            <FaCode /> App Development
          </li>
          <li>
            <FaCode /> UI-UX
          </li>
          <li>
            <FaCode /> Full-Stack (FrontEnd & BackEnd)
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaLaptopCode /> SKILLS
        </h2>
        <ul>
          <li>
            <FaCode /> Java
          </li>
          <li>
            <FaCode /> C, C++
          </li>
          <li>
            <FaCode /> Python
          </li>
          <li>
            <FaLaptopCode /> Javascript
          </li>
          <li>
            <FaLaptopCode /> HTML, CSS
          </li>
          <li>
            <FaDatabase /> PostgreSQL
          </li>
          <li>
            <FaLaptopCode /> React, MongoDB, Node.js, Angular, Express
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaCertificate /> CERTIFICATIONS
        </h2>
        <ul>
          <li>
            <FaCertificate /> Foundations of User Experience (UX) Design
          </li>
          <li>
            <FaCertificate /> Machine Learning on Kaggle
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaDumbbell /> Hobbies
        </h2>
        <ul>
          <li>
            <FaDumbbell /> Exercise
          </li>
          <li>
            <FaGamepad /> Games
          </li>
          <li>
            <FaMusic /> Music
          </li>
          <li>
            <FaUtensils /> Cooking
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaLanguage /> Languages Known
        </h2>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
          <li>German</li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaGlobe /> LINKS
        </h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/atharva-mankame-a76266224/">
              <FaLinkedin style={{ color: "#007BFF" }} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Atharva-M1">
              <FaGithub style={{ color: "#000" }} /> Github
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
