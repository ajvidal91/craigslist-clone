import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
<div className={"container"}>
    <header>
        <div className={"left-menu"}>
            <div className={"logo"}>Craigslist</div>
            <div className={"city"}>Boston
                <i className={`fas fa-chevron-down`}></i>
            </div>
        </div>

        <div className={"right-menu"}>
            <div className={"user-img"}>image</div>
            <div className={"user-dropdown"}>my account
                <i className={`fas fa-chevron-down`}></i>
            </div>
            <div className={"post-btn"}>post to classified</div>
        </div>
    </header>
</div>)
  }
}
