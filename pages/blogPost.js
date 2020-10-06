import React, { Component } from "react";

import {table, minifyRecords} from './api/utils/Airtable'
//Import components
import Layout from '../components/Layout'
import Menu from '../components/Menu/Menu'
import Hamburguer from '../components/Hamburguer/Hamburger';
import Drop from '../components/Drop/Drop'
import SingleBlog from '../components/SingleBlog/SingleBlog'
import MoreBlogs from '../components/MoreBlogs/MoreBlogs'
import Footer from '../components/Footer/Footer'



class BlogPage extends Component {
  constructor(props){
    super(props)
    console.log(props.allBlogs)
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
          <SingleBlog />
          <MoreBlogs
            blogsText ='Artículos relacionados'
            key={this.props.allBlogs}
            blog={this.props.allBlogs}
          />
          <Footer />
        </Layout>
        
      </div>
    )
  }

}

export default BlogPage;

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