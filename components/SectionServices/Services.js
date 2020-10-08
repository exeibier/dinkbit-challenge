import React, { Component } from 'react'

import DesignServices from './DesignServices'
import DevService from './DevService'
import MktService from './MktService'

class Services extends Component {
  constructor (props) {
    super(props)
    this.state = {
      design: true,
      dev: false,
      mkt: false
    }
    this.handleDesign = this.handleDesign.bind(this)
    this.handleDev = this.handleDev.bind(this)
    this.handleMkt = this.handleMkt.bind(this)
  }

  handleDev () {
    this.setState({
      design: false,
      dev: true,
      mkt: false
    })
  }

  handleDesign () {
    this.setState({
      design: true,
      dev: false,
      mkt: false
    })
  }

  handleMkt () {
    this.setState({
      design: false,
      dev: false,
      mkt: true
    })
  }

  render () {
    return (
      <div id='services'>
        {this.state.design ? <DesignServices onHandleDesign={this.handleDesign} onHandleDev={this.handleDev} onHandleMkt={this.handleMkt} design={this.state.design} /> : null}
        {this.state.dev ? <DevService onHandleDev={this.handleDev} onHandleDesign={this.handleDesign} onHandleMkt={this.handleMkt} dev={this.state.dev} /> : null}
        {this.state.mkt ? <MktService onHandleMkt={this.handleMkt} onHandleDesign={this.handleDesign} onHandleDev={this.handleDev} mkt={this.state.mkt} /> : null}

      </div>
    )
  }
};

export default Services
