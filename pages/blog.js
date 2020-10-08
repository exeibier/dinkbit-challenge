import React, { Component } from "react";

import styles from '../styles/Blog.module.scss'
import {table, minifyRecords} from '../pages/api/utils/Airtable'
import Router from 'next/router'
import TextLoop from 'react-text-loop'
 

//Import components
import Layout from '../components/Layout'
import MenuDark from '../components/Menu/MenuDark'
import Hamburguer from '../components/Hamburguer/Hamburger';
import Drop from '../components/Drop/Drop'
import SearchBar from '../components/SearchBar/SearchBar'
import ListBlog from '../components/ListBlogs/ListBlog'
import CheckBox from '../components/CheckBox/CheckBox'
import Newsletter from '../components/Newsletter/Newsletter'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'




class Blog extends Component {
  constructor(props){
    console.log(props.allBlogs)
    super(props)
    this.state ={
      sideButtonOpener: false,
      filterBlog: '',
      filteredBlogs: props.allBlogs
    };
    console.log(props.allBlogs)
    this.onClickPostHandler = this.onClickPostHandler.bind(this)
  }
  hamburguerToggleHandler = () =>{
    this.setState((prevState) =>{
      return{ sideButtonOpener: !prevState.sideButtonOpener}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideButtonOpener: false})
  };

  onClickPostHandler(id){
    Router.push(`/blogPost/${id}`)
    window.scrollTo(0, 0);
  }

  filterUpdate = (val) =>{
    this.setState({
      filterBlog: val
    })
    this.filteringBlogs()
  }

  filteringBlogs = () => {
    if (this.state.filterBlog){
      const filteredBlogs = this.props.allBlogs
      .filter(blog =>{
        return blog.fields.title.toLowerCase().indexOf(this.state.filterBlog.toLowerCase()) >= 0
      })  
      this.setState({
        filteredBlogs: filteredBlogs
      })
    } else {
      this.setState({
        filteredBlogs: this.props.allBlogs
      })
    }
  }
  renderingBlogs = (arrayBlogs) =>{
    return arrayBlogs.map(blog =>{
      return(
        <ListBlog onClickPost={()=>{this.onClickPostHandler(blog.id)}} key={blog.id} blog={blog} />
      )
    })
  }
 
 
  render(){
    let sideButton, backdrop;
    // const renderBlogs = this.props.allBlogs
    //    
    //   .map(blog => {
    //       return(
    //       )
    // })
    
    if(this.state.sideButtonOpener){
      sideButton = <Hamburguer/>
      backdrop = <Drop click={this.backDropClickHandler}/>
    }
    return (
      <div>
        <MenuDark hamburguerClickHandler={this.hamburguerToggleHandler}/>
        {sideButton}
        {backdrop }
        <Layout>
          <div className={styles.title}>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-8'>
                  <p>BLOG</p>
                  <TextLoop            
                   mask={true} 
                  >
                    <h2>Compartimos</h2>
                    <h2>Escribimos</h2>
                  </TextLoop>
                  <h2>cosas increíbles</h2>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className={styles.blog_hero_image}>
                    <img src='BLOG/formas/circulo-28.png'/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className='container'>
            <div className={`${styles.list_blog_content} d-block d-lg-flex`}>
              <aside className={`${styles.sidebar}`}>
                <SearchBar
                 filterBlog={this.state.filterBlog}
                 filterUpdate={this.filterUpdate}
                 />
                <div className={'styles.sidebar_content d-flex flex-column'}>
                  <p>Filtros</p>
                    <CheckBox
                      list = {this.props.allBlogs}
                    />
                </div>
                <div className={styles.sidebar_populars}>
                  <p>Top 5 destacados</p>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>01</p>
                    <div className={`${styles.title_wrap} d-block`}>
                        <a href={`blogPost/${this.props.allBlogs[0].id}`}><p className={styles.title_popular}>{this.props.allBlogs[0].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[0].fields.Date} - {this.props.allBlogs[0].fields.readTime}</p>
                    </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>02</p>
                      <div className={`${styles.title_wrap} d-block`}>
                        <a href={`blogPost/${this.props.allBlogs[1].id}`}>
                          <p className={styles.title_popular}>{this.props.allBlogs[1].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[1].fields.Date} - {this.props.allBlogs[1].fields.readTime}</p>        
                      </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>03</p>
                      <div className={`${styles.title_wrap} d-block`}>
                        <a href={`blogPost/${this.props.allBlogs[2].id}`}><p className={styles.title_popular}>{this.props.allBlogs[2].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[2].fields.Date} - {this.props.allBlogs[2].fields.readTime}</p>
                      </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>04</p>
                    <div className={`${styles.title_wrap} d-block`}>
                      <a href={`blogPost/${this.props.allBlogs[3].id}`}><p className={styles.title_popular}>{this.props.allBlogs[3].fields.title}</p></a>
                      <p className={styles.date_popular}>{this.props.allBlogs[3].fields.Date} - {this.props.allBlogs[3].fields.readTime}</p>
                    </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>05</p>
                    <div className={`${styles.title_wrap} d-block`}>
                      <a href={`blogPost/${this.props.allBlogs[4].id}`}><p className={styles.title_popular}>{this.props.allBlogs[4].fields.title}</p></a>
                      <p className={styles.date_popular}>{this.props.allBlogs[4].fields.Date} - {this.props.allBlogs[4].fields.readTime}.</p>
                    </div>
                  </div>
                </div>
              </aside>
              <div className='flex-column'>
                {this.state.filteredBlogs.length !== 0 ? this.renderingBlogs(this.state.filteredBlogs):this.renderingBlogs(this.props.allBlogs)}
              </div>
          </div>
        </div>
          <Newsletter/>
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

export default Blog;

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