import React from "react";
import styles from "./TeamCard.module.css";
import "font-awesome/css/font-awesome.min.css";
import "./TeamCard.module.css";
import { Link } from "react-router-dom";

export const TeamCard = ({ member: { image, name, position } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="projecttitle" />
      </div>

      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{position}</p>

      <div className={styles.social}>
        <Link to={"#"}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link to={"#"}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
        <Link to={"#"}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Link>
        <Link to={"#"}>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </Link>
      </div>

      {/* <ul className={styles.skills}>
        {
          skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            )
          })
        }
      </ul> */}

      {/* <div className={styles.links}>
        <a href={demo} target='_blank' className={styles.link}>Demo</a>
        <a href={source} target='_blank' className={styles.link}>Source</a>
      </div> */}
    </div>
  );
};
