import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TeamCard.module.css";
import 'font-awesome/css/font-awesome.min.css';

const TeamItem = ({ member: { image, name, position } }) => {
    return (
        <div className={styles.TeamItem}>
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
            </div>
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
            </div>

        </div>
    );
};

export default TeamItem;