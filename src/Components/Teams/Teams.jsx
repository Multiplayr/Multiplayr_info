import React from "react";
import members from "../../Data/Team.json";
import styles from "./Teams.module.css";
import { TeamCard } from "./TeamCard";
import { HeadingSection } from "../Common";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamItem from "./TeamItem";


const Teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false,

  };

  return (
    <section className={styles.container}>
      {/* <div className={styles.head}>
        <h3 className={styles.head_about}>team members</h3>
        <h1 className={styles.head_title}>Meet The Team Behind The Scene </h1>
      </div> */}
      <HeadingSection type={"team members"} title={"Meet The Team Behind The Scene"} />

      <div className={styles.teams}>
        <Slider {...settings}>
          {members.map((member, id) => {
            return <TeamItem key={id} member={member} />;
          })}
        </Slider>
      </div>

    </section>
  );
};

export default Teams; 
