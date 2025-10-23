import React from "react";
import "../scss/aboutUs.css";

const developers = [
  {
    name: "Souvik Mondal",
    role: "Senior Developer",
    img: "",
    about: "",
  },
  {
    name: "Apoorva Singh",
    role: "Junior Programmer",
    img: "",
    about: "",
  },
  {
    name: "Suvajit Mondal",
    role: "Junior Programmer",
    img: "",
    about: "Enjoys integrating frontend and backend to deliver complete web solutions.",
  },
  {
    name: "Bimam Maity",
    role: "Junior Programmer",
    img: "",
    about: "Passionate about design systems and creating seamless user experiences.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="developer-list">
        {developers.map((dev, index) => (
          <div key={index} className="developer-card">
            <img src={dev.img} alt={dev.name} className="developer-img" />
            <h3>{dev.name}</h3>
            <p className="role">{dev.role}</p>
            <p className="about-text">{dev.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
