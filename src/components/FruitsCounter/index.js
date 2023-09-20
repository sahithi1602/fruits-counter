// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mongoesCount: 0,
    bananasCount: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mongoesCount: prevState.mongoesCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mongoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="title">{mongoesCount}</span> mangoes
            <span className="title">{bananasCount}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-counter">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />

              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <div className="image-counter">
                <img
                  className="img-size"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
