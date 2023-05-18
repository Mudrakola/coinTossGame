import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
    total: 0,
  }

  buttonClick = () => {
    const {heads, tails, total} = this.state
    const num = Math.floor(Math.random() * 2)
    if (num === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        headsImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        headsImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevState => ({total: prevState.heads + prevState.tails}))
  }

  render() {
    const {heads, tails, total, headsImage} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={headsImage} className="image" alt="toss result" />
          <button
            className="button-toss"
            type="button"
            onClick={this.buttonClick}
          >
            Toss Coin
          </button>
          <div className="para">
            <p className="para1">Total:{total}</p>
            <p className="para1">Heads:{heads}</p>
            <p className="para">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
