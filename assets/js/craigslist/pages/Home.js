import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Angel'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }

  loopTags = () => {
      let testTags = ["a","b","c","d","e","f","g"]
      return testTags.map((item) => <div key={item} className={"tag"}>Apple Macbook</div>)

  }

  render () {
    return (
        <div className={"home"}>
        <div className={"container"}>
            <h1>Connecting People<br/> Everywhere</h1>
            <section className={"links"}>
                {this.loopCategories()}
            </section>

            <section className={"trending"}>
                <input type="text" name="search" />
                <div className={"title"}>
                <i className="far fa-clock">
                </i>trending
                </div>
                <div className={"trending-tags"}>
                    {this.loopTags()}
                </div>
            </section>
        </div>
        </div>
    )
  }

  loopCategories = () =>{
      let testArray = [1,2,3,4,5,6,7]
      return testArray.map((item) => {
          return (
          <div className={"categories"} key={item}>
              <div className={"link-title"}>Community</div>
              <div className={"group-links"}>
              <a href="#" className={"link"}>Community</a>
              <a href="#" className={"link"}>General</a>
              <a href="#" className={"link"}>Groups</a>
              <a href="#" className={"link"}>Activities</a>
              <a href="#" className={"link"}>Artists</a>
              <a href="#" className={"link"}>Local News</a>
              <a href="#" className={"link"}>Child Care</a>
              <a href="#" className={"link"}>Lost & Found</a>
              <a href="#" className={"link"}>Classes</a>
              <a href="#" className={"link"}>Musician</a>
              <a href="#" className={"link"}>Events</a>
              <a href="#" className={"link"}>Pets</a>
              </div>
          </div>
          )
      })
  }

}
