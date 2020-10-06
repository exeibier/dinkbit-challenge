import React, { Component } from "react";

import styles from '../styles/Blog.module.scss'
import {table, minifyRecords} from '../pages/api/utils/Airtable'

//Import components
import Layout from '../components/Layout'
import MenuDark from '../components/Menu/MenuDark'
import Hamburguer from '../components/Hamburguer/Hamburger';
import Drop from '../components/Drop/Drop'
// import ListBlogs from '../components/ListBlogs/ListBlogs'
import ListBlog from '../components/ListBlogs/ListBlog'
import Newsletter from '../components/Newsletter/Newsletter'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'



class Blog extends Component {
  constructor(props){
    super(props)
    this.state ={
      sideButtonOpener: false
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
    console.log(id)
  }
  render(){
    let sideButton, backdrop;


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
                  <h2>Compartimos cosas increíbles</h2>
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
                <div className={styles.sidebar_search}>
                  <input type='text' placeholder='Buscar..' />
                </div>
                <div className={styles.sidebar_content}>
                  <p>Filtros</p>
                  <input type='checkbox' />
                  <label for='vehicle1'> I have a bike</label>
                </div>
                <div className={styles.sidebar_populars}>
                  <p>Top 5 destacados</p>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>01</p>
                    <div className={`${styles.title_wrap} d-block`}>
                        <a href={`getBlogs/${this.props.allBlogs[0].fields.slug}`}><p className={styles.title_popular}>{this.props.allBlogs[0].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[0].fields.Date} - {this.props.allBlogs[0].fields.readTime}</p>
                    </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>02</p>
                      <div className={`${styles.title_wrap} d-block`}>
                        <a href={`getBlogs/${this.props.allBlogs[1].fields.slug}`}>
                          <p className={styles.title_popular}>{this.props.allBlogs[1].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[1].fields.Date} - {this.props.allBlogs[1].fields.readTime}</p>        
                      </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>03</p>
                      <div className={`${styles.title_wrap} d-block`}>
                        <a href={`getBlogs/${this.props.allBlogs[2].fields.slug}`}><p className={styles.title_popular}>{this.props.allBlogs[2].fields.title}</p></a>
                        <p className={styles.date_popular}>{this.props.allBlogs[2].fields.Date} - {this.props.allBlogs[2].fields.readTime}</p>
                      </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>04</p>
                    <div className={`${styles.title_wrap} d-block`}>
                      <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                      <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
                    </div>
                  </div>
                  <div className={`${styles.single_popular} d-flex`}>
                    <p className={styles.number}>05</p>
                    <div className={`${styles.title_wrap} d-block`}>
                      <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                      <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
                    </div>
                  </div>
                </div>
              </aside>
              <div className='flex-column'>
                  {this.props.allBlogs.map(blog => 
                    (<ListBlog onClickPost={onClickPostHandler} key={blog.id} blog={blog} />
                    ))}
                </div>
          </div>
        </div>
          <Newsletter/>
          <ContactUs/>
          <Footer/>
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