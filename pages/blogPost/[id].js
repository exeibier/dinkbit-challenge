import React, { useEffect, Component } from "react";

import {table} from '../api/utils/Airtable'
import { useRouter } from 'next/router'
//Import components
import Layout from '../../components/Layout'
import Menu from '../../components/Menu/Menu'
import Hamburguer from '../../components/Hamburguer/Hamburger';
import Drop from '../../components/Drop/Drop'
import SingleBlog from '../../components/SingleBlog/SingleBlog'
import MoreBlogs from '../../components/MoreBlogs/MoreBlogs'
import Footer from '../../components/Footer/Footer'




class BlogPage extends Component{
  constructor(props){
    super(props)
    console.log(props.singleBlog)
  }
  state = {
    sideButtonOpener: false
  };

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
          <SingleBlog
            singleBlog={this.props.singleBlog}

          />
          <MoreBlogs
            blogsText ='Artículos relacionados'
            blogsText ={'Compartimos lo que sabemos'}
            img = {'../../../HOME/Hero/blog.png'}
            title = {'Las mejores prácticas UX/UI'}
            authorImg = {'../../../HOME/Equipo/escorza.svg'}
            authorName = {'Escorza'}
          />
          <Footer
              logo={'../../../logo.png'}
              mex={'../../../HOME/Footer/Paises/mexico.png'}
              esp={'../../../HOME/Footer/Paises/españa.png'}
              shopi={'../../../HOME/Footer/Logos/logos-23.png'}
              mms={'../../../HOME/Footer/Logos/logos-24.png'}
              goog={'../../../HOME/Footer/Logos/logos-25.png'}
              cloud={'../../../HOME/Footer/Logos/logos-26.png'}
          />
        </Layout>
        
      </div>
    )
  }

}

export default BlogPage;

export async function getServerSideProps(context){
  if (context.query.id !== 'logo.png'){
    console.log(context.query.id)
    const id = context.query.id
     const blogs = await table.find(id)
     const {fields} = blogs
     return {
       props:{
         singleBlog: fields
       }
     }

  } 
}