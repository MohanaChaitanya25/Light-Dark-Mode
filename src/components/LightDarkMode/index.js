// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {darkMode: true, darkModeBg: true, darkModeTextColor: true}

  getButtonText = () => {
    const {darkMode} = this.state
    return darkMode ? 'Light Mode' : 'Dark Mode'
  }

  getDarkModeBg = () => {
    const {darkModeBg} = this.state
    return darkModeBg ? 'darkMode_bg_container' : ''
  }

  getDarkModeTextColor = () => {
    const {darkModeTextColor} = this.state
    return darkModeTextColor ? 'darkMode_text_color' : ''
  }

  darkModeChanger = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
      darkModeBg: !prevState.darkModeBg,
      darkModeTextColor: !prevState.darkModeTextColor,
    }))
  }

  render() {
    return (
      <div className="lightDarkMode-bg-container">
        <div className={`lightDarkMode-card-container ${this.getDarkModeBg()}`}>
          <h1
            className={`lightDarkMode-heading ${this.getDarkModeTextColor()}`}
          >
            Click To Change Mode
          </h1>

          <button
            onClick={this.darkModeChanger}
            type="button"
            className="lightDarkMode-btn"
          >
            {this.getButtonText()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
