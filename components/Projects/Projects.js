
import React from 'react'
import styles from '../../styles/Projects.module.scss'
import Project from '../Projects/Project'

function Projects (props){
    return(
        <div className={`${styles.projects_container} container`}>
            <div className='row'>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <h3>PROYECTOS</h3>
                    <h2>Lucen increíbles, funcionan increíble</h2>
                </div>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <div className={styles.single_project}>
                        <Project
                            title = {"Bull & Tank"}
                            subTitle={"Diseño y Desarrollo Web - México"}
                            imageProject = {'/HOME/Footer/Logos/bull.png'}
                        />     
                    </div>
                   
                </div>
            </div>
            <div className='row'>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <div className={styles.single_project}>
                        <Project
                            title = {"Divya"}
                            subTitle={"Diseño y Desarrollo Web - México"}
                            imageProject = {'/HOME/Footer/Logos/divya.png'}    
                        />  
                    </div>
                    
                </div>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <div className={styles.single_project}>
                        <Project
                            title = {"Refly"}
                            subTitle={"Diseño y Desarrollo Web, Branding - México"}
                            imageProject = {'/HOME/Footer/Logos/refly.png'}    
                        />    
                    </div>
                    
                </div>
            </div>
            <div className='row'>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <div className={styles.single_project}>
                        <Project
                            title = {"The Fit Pilates"}
                            subTitle={"Diseño y Desarrollo Web, Branding - México"}
                            imageProject = {'/HOME/Footer/Logos/fit.png'}    
                        />      
                    </div>
                   
                    <div className={`${styles.button_projects} d-lg-block d-none`}>
                        <a href='#'>Ver más proyectos</a>
                    </div>
                </div>
                <div className={`${styles.project_box} col-12 col-lg-6`}>
                    <div className={styles.single_project}>
                        <Project
                            title = {"Pakmail"}
                            subTitle={"Diseño y Estrategia de Redes Sociales - México"}
                            imageProject = {'/HOME/Footer/Logos/mail.png'}    
                        />      
                    </div>
                    <div className={`${styles.button_projects} d-lg-none d-block`}>
                        <a href='#'>Ver más proyectos</a>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Projects