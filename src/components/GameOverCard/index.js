import './index.js'

const GameOverCard = props => {
  const {score, onClickPlayAgain} = props

  const onClickPlayAgainButton = () => {
    onClickPlayAgain()
  }

  return (
    <div className="game-over-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-icon"
      />
      <h1 className="heading">YOUR SCORE</h1>
      <p className="score">{score}</p>
      <button
        type="button"
        className="paly-again-button"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
          onClick={onClickPlayAgainButton}
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
