import React, { Component } from 'react'

import styles from '../../styles/SearchBar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
  }

  handleFilterUpdate () {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render () {
    return (
      <div className={styles.sidebar_search}>
        <form>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' ref={(value) => { this.myValue = value }} className={styles.searchTerm} placeholder='Buscar artículo' onChange={this.handleFilterUpdate} />
        </form>

      </div>)
  }
}

export default SearchBar
