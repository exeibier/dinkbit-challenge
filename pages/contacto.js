import React, { Component } from "react";


//Import components
import Layout from '../components/Layout'
import Menu from '../components/Menu/Menu'
import Hamburguer from '../components/Hamburguer/Hamburger';
import Drop from '../components/Drop/Drop'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'



class ContactUs extends Component {
  constructor(props){
    super(props)
    this.state= {
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
           <Contact/>       
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

export default ContactUs;
