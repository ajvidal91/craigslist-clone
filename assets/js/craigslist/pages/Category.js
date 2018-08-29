import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Category extends Component {

  constructor () {
    super()
    this.state = {
    }
  }


  render () {
      const {match, location, history} = this.props
    return (
        <div className={"category"}>
            <div className={"container"}>
                this category is {match.params.category}
            </div>
        </div>
    )
  }

}
