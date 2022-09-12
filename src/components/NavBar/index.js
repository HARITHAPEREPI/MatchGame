import './index.css'

const NavBar = props => {
  const {score, time, isGameInProgress} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-and-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="title-name"
        />
        <div className="score-timer-container">
          <p className="score-count">
            Score: <span className="score">{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          {isGameInProgress && <p className="time">{time} Sec</p>}
          {!isGameInProgress && <p className="time">0 sec</p>}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
