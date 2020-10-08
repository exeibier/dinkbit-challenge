import React, { Component } from 'react'

import styles from '../../styles/CheckBox.module.scss'
class CheckBox extends Component {
  constructor (props) {
    super(props)
  }

  onChangeHandler = (val) =>{
    console.log('me checkeaste perro')
  }
  render () {
    return (
      <div>
        <form className={styles.check_wrap}>
          {this.props.list.map(allList => {
            return (
              <div>
                <input key={allList.id} type='checkbox' onChange={this.onChangeHandler} />
                <label htmlFor='vehicle1'>{allList.fields.category}</label><br />
              </div>
            )
          })}

        </form>
      </div>
    )
  }
}

export default CheckBox
