import React, { Component } from "react";

import styles from '../styles/Home.module.scss'
import {table, minifyRecords} from '../pages/api/utils/Airtable'
import TextLoop from 'react-text-loop'

//Import components
import Layout from '../components/Layout'
import Menu from '../components/Menu/Menu'
import Hamburguer from '../components/Hamburguer/Hamburger';
import Drop from '../components/Drop/Drop'
import Services from '../components/SectionServices/Services'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Clients from '../components/Clients/Clients'
import Shop from '../components/Shop/Shop'
import Indicators from '../components/Indicators/Indicators'
import MoreBlogs from '../components/MoreBlogs/MoreBlogs'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideButtonOpener: false

    }
  }
  hamburguerToggleHandler = () =>{
    this.setState((prevState) =>{
      return{ sideButtonOpener: !prevState.sideButtonOpener}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideButtonOpener: false})
  };
  render(){
    let sideButton, backdrop;

    if(this.state.sideButtonOpener){
      sideButton = <Hamburguer/>
      backdrop = <Drop click={this.backDropClickHandler}/>
    }
    return (
      <div>
        <Menu hamburguerClickHandler={this.hamburguerToggleHandler}/>
        {sideButton}
        {backdrop }
        <Layout>
          <div className={styles.title}>
            <p>dinkbit es un Equipo Creativo</p>
            <TextLoop
            mask={true}  
            >
              <h2>Hacemos</h2>
              <h2>Creamos</h2>
            </TextLoop>
            <h2>cosas increíbles</h2>
          </div>
          <Services/>
          <Projects/>
          <About/>
          <Clients/>
          <Shop/>
          <Indicators/>
          <MoreBlogs
            blogsText ={'Compartimos lo que sabemos'}
            img = {'HOME/Hero/blog.png'}
            title = {'Las mejores prácticas UX/UI'}
            authorImg = {'HOME/Equipo/escorza.svg'}
            authorName = {'Escorza'}

          />
          <ContactUs/>
          <Footer
            logo={'logo.png'}
            mex={'HOME/Footer/Paises/mexico.png'}
            esp={'HOME/Footer/Paises/españa.png'}
            shopi={'HOME/Footer/Logos/logos-23.png'}
            mms={'HOME/Footer/Logos/logos-24.png'}
            goog={'HOME/Footer/Logos/logos-25.png'}
            cloud={'HOME/Footer/Logos/logos-26.png'}
          />
        </Layout>
        
      </div>
    )
  }

}

export default Home;

export async function getServerSideProps(context){
  try {
    const blogs = await table.select({}).firstPage()
    return {
      props:{
        allBlogs: minifyRecords(blogs)
      }
    }
  } catch (error) {
    console.log(error)
    return{
      props:{
        error: 'something went wrong'
      }
    }
  }

}