import React from 'react'
import members from "../../Data/Team.json"
import  styles  from './Teams.module.css'
import { TeamCard } from './TeamCard'

export const Teams = () => {
  return (
    <section className={styles.container} >
      <div className={styles.head}>
                <h3 className={styles.head_about}>team members</h3>
                <h1 className={styles.head_title}>Meet The Team Behind The Scene </h1>
            </div>
      <div className={styles.teams}>
        {
            members.map((member, id) => {
              return (
                <TeamCard key={id} member={member} />
              ) 
            })
        }
      </div>
    </section>
  )
}
