import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const backgroundMode = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonMode = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="lightdark-container">
        <div className={`container ${backgroundMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
