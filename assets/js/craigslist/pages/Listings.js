import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Listings extends Component {

  constructor () {
    super()
    this.state = {
    }
  }


  render () {
      const {match, location, history} = this.props
    return (
        <div className={"listings"}>
            <div className={"container"}>
                City: {match.params.city}
                Category: {match.params.category}
                Listings: {match.params.listings}                  
            </div>
        </div>
    )
  }

}
